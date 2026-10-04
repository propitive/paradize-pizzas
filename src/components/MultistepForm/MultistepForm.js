import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Select, { components } from "react-select";
import emailjs from "@emailjs/browser";
import {
  appetizerOptions, saladOptions, dessertOptions, pastaOptions,
  dichotomousOptions,
} from "../../utils/constants";
import { buildQuoteEmail, createEmptyQuote } from "../../utils/quoteEmail";
import { formatPhone, phoneCaretPosition } from "../../utils/phoneInput";
import "./MultiStepForm.css";

const steps = ["Your event", "Food preferences", "Your contact details"];
const foodFields = [
  ["appetizers", "Appetizers", appetizerOptions],
  ["salads", "Salads", saladOptions],
  ["desserts", "Desserts", dessertOptions, true],
  ["pastas", "Pastas", pastaOptions, true],
];

function CheckboxOption(props) {
  return (
    <components.Option {...props}>
      <span className="quote-select__checkbox" aria-hidden="true">
        {props.isSelected ? "✓" : ""}
      </span>
      {props.label}
    </components.Option>
  );
}

function Field({ name, label, hint, value, onChange, ...inputProps }) {
  const inputRef = useRef(null);
  const caretDigitsRef = useRef(null);
  const isPhone = name === "phone";

  useLayoutEffect(() => {
    if (caretDigitsRef.current === null) return;
    const input = inputRef.current;
    if (document.activeElement === input) {
      const position = phoneCaretPosition(value, caretDigitsRef.current);
      input.setSelectionRange(position, position);
    }
    caretDigitsRef.current = null;
  });

  const changePhone = (input, nextValue, digitCount) => {
    input.setCustomValidity("");
    caretDigitsRef.current = digitCount;
    onChange(name, formatPhone(nextValue));
  };

  return (
    <div className="quote-field">
      <label htmlFor={`quote-${name}`}>{label}</label>
      {hint && <p id={`quote-${name}-hint`} className="quote-hint">{hint}</p>}
      <input {...inputProps} ref={inputRef} id={`quote-${name}`} name={name} value={value}
        aria-describedby={hint ? `quote-${name}-hint` : undefined}
        onChange={(event) => {
          if (isPhone) {
            const input = event.target;
            const raw = input.value;
            let digitCount = raw.slice(0, input.selectionStart ?? raw.length).replace(/\D/g, "").length;
            const digits = raw.replace(/\D/g, "");
            if (digits.length === 11 && digits.startsWith("1")) digitCount = Math.max(0, digitCount - 1);
            changePhone(input, raw, digitCount);
            return;
          }
          event.target.setCustomValidity("");
          onChange(name, event.target.value);
        }}
        onKeyDown={(event) => {
          if (!isPhone || !["Backspace", "Delete"].includes(event.key)) return;
          const input = event.currentTarget;
          if (input.selectionStart !== input.selectionEnd) return;
          const cursor = input.selectionStart;
          const backwards = event.key === "Backspace";
          let index = backwards ? cursor - 1 : cursor;
          while (index >= 0 && index < value.length && !/\d/.test(value[index])) index += backwards ? -1 : 1;
          if (index < 0 || index >= value.length) return;
          event.preventDefault();
          const nextValue = value.slice(0, index) + value.slice(index + 1);
          const nextCursor = backwards ? index : cursor;
          changePhone(input, nextValue, nextValue.slice(0, nextCursor).replace(/\D/g, "").length);
        }} />
    </div>
  );
}

function MultistepForm({ onSendingChange = () => {}, onSentChange, onViewGallery, onClose, isActive = true }) {
  const [step, setStep] = useState(0);
  const [quote, setQuote] = useState(createEmptyQuote);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef(null);
  const headingRef = useRef(null);
  const sendingRef = useRef(false);

  useEffect(() => { onSentChange?.(sent); }, [sent, onSentChange]);

  useEffect(() => {
    if (!isActive && sent) {
      setQuote(createEmptyQuote());
      setStep(0);
      setSent(false);
      setError("");
    }
  }, [isActive, sent]);

  useEffect(() => {
    const heading = headingRef.current;
    const dialog = heading?.closest("dialog");
    if (isActive && (!dialog || dialog.open)) heading?.focus();
  }, [step, sent, isActive]);

  const update = (name, value) => setQuote((previous) => ({ ...previous, [name]: value }));
  const field = (name, label, hint, props = {}) => (
    <Field name={name} label={label} hint={hint} value={quote[name]}
      onChange={update} required maxLength={200} {...props} />
  );

  const validate = () => {
    for (const input of formRef.current.querySelectorAll("input[required]")) {
      input.setCustomValidity(input.value.trim() ? "" : "Please fill out this field.");
    }
    const phone = formRef.current.querySelector('input[name="phone"]');
    if (phone && phone.value.trim() && phone.value.replace(/\D/g, "").length !== 10) {
      phone.setCustomValidity("Please enter a complete 10-digit phone number.");
    }
    const email = formRef.current.querySelector('input[name="email"]');
    if (email && email.value.trim() && (email.validity.typeMismatch || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim()))) {
      email.setCustomValidity("Please enter an email address like name@example.com.");
    }
    return formRef.current.reportValidity();
  };

  const submit = async (event) => {
    event.preventDefault();
    if (sendingRef.current || !validate()) return;
    if (step < 2) {
      setStep(step + 1);
      return;
    }
    sendingRef.current = true;
    setSending(true);
    onSendingChange(true);
    setError("");
    try {
      await emailjs.send(
        "service_ygalzf6", "template_suuq3lm", buildQuoteEmail(quote),
        "jGNwN29o5MpAtqpNz"
      );
      setSent(true);
    } catch {
      setError("We couldn’t send your request. Your answers are saved. Please try again, or call us at (469) 605-8089.");
    } finally {
      sendingRef.current = false;
      setSending(false);
      onSendingChange(false);
    }
  };

  if (sent) return (
    <div className="quote-success" role="status">
      <h3 ref={headingRef} tabIndex={-1} className="quote-visually-hidden">Your quote request has been sent!</h3>
      <p>Thank you for thinking of Paradize Pizzas. We’ll reach out to discuss your event. In the meantime, feel free to explore our gallery!</p>
      <div className="quote-actions">
        {onClose && <button type="button" className="quote-button quote-button--secondary" onClick={onClose}>Done</button>}
        <button type="button" className="quote-button" onClick={onViewGallery}>View Gallery</button>
      </div>
    </div>
  );

  return (
    <form className="quote-form" ref={formRef} onSubmit={submit} noValidate>
      <div className="quote-progress" role="progressbar" aria-label="Quote form progress"
        aria-valuemin={0} aria-valuemax={3} aria-valuenow={step + 1}
        aria-valuetext={`Step ${step + 1} of 3: ${steps[step]}`}>
        <div className="quote-progress__fill" style={{ width: `${((step + 1) / 3) * 100}%` }} />
      </div>
      <p className="quote-visually-hidden" aria-live="polite">Step {step + 1} of 3</p>
      <h3 ref={headingRef} tabIndex={-1} className="quote-visually-hidden">{steps[step]}</h3>
      <fieldset className="quote-fields" disabled={sending}>
        <legend className="quote-visually-hidden">{steps[step]}</legend>
        {step === 0 && <>
          {field("eventDate", "Event Date or Timeframe", "If you don’t have a specific event date, just give us a general timeframe.", { placeholder: "e.g. October 24, 2026 or a Saturday in November" })}
          {field("attendance", "Expected Guest Count", "If you don’t know specifics, that’s fine. Just give us a general number.", { type: "number", min: 1, step: 1, inputMode: "numeric", placeholder: "e.g. 100" })}
          {field("city", "Event City or Area", "A city or general area is fine if you haven’t chosen a venue yet.", { autoComplete: "address-level2", placeholder: "e.g. Dallas" })}
          <fieldset className="quote-radio-group">
            <legend>Do you have a venue reserved already?</legend>
            {dichotomousOptions.map(({ value }) => (
              <label key={value}>
                <input type="radio" name="venueReserved" value={value} required
                  checked={quote.venueReserved === value}
                  onChange={() => update("venueReserved", value)} />
                {value}
              </label>
            ))}
          </fieldset>
          {quote.venueReserved === "Yes" && <div className="quote-address">
            <p className="quote-hint">We need the venue address to confirm availability and provide an accurate quote.</p>
            {field("street", "Street Address", null, { autoComplete: "street-address", placeholder: "123 Main St." })}
            <div className="quote-grid">
              {field("state", "State", null, { autoComplete: "address-level1", placeholder: "TX" })}
              {field("zip", "ZIP Code", null, { autoComplete: "postal-code", placeholder: "75128", maxLength: 20 })}
            </div>
          </div>}
        </>}
        {step === 1 && <>
          <div className="quote-grid">
            {foodFields.map(([name, label, options, optional]) => (
              <div className="quote-field" key={name}>
                <label htmlFor={`quote-${name}`}>
                  {label}{optional && <> <span className="quote-optional">(optional add-on)</span></>}
                </label>
                <Select inputId={`quote-${name}`} instanceId={`quote-${name}`} name={name}
                  options={options} isMulti closeMenuOnSelect={false} hideSelectedOptions={false}
                  value={quote[name]} onChange={(value) => update(name, value || [])}
                  components={{ Option: CheckboxOption }} classNamePrefix="quote-select"
                  placeholder="Select options…" maxMenuHeight={200}
                  menuPlacement="bottom" menuShouldScrollIntoView={false} />
              </div>
            ))}
          </div>
          <div className="quote-grid">
            {[["charcuterie", "Charcuterie Board"], ["glazing", "Glazing Table"]].map(([name, label]) => (
              <div className="quote-field" key={name}>
                <label htmlFor={`quote-${name}`}>
                  {label} <span className="quote-optional">(optional add-on)</span>
                </label>
                <Select inputId={`quote-${name}`} instanceId={`quote-${name}`} name={name}
                  options={dichotomousOptions} isClearable value={quote[name]}
                  onChange={(value) => update(name, value)} classNamePrefix="quote-select"
                  placeholder="Not sure yet" maxMenuHeight={200}
                  menuPlacement="bottom" menuShouldScrollIntoView={false} />
              </div>
            ))}
          </div>
        </>}
        {step === 2 && <>
          <div className="quote-grid">
            {field("firstName", "First Name", null, { autoComplete: "given-name" })}
            {field("lastName", "Last Name", null, { autoComplete: "family-name" })}
            {field("email", "Email", null, { type: "email", autoComplete: "email", autoCapitalize: "none", spellCheck: false, placeholder: "name@example.com" })}
            {field("phone", "Phone Number", null, { type: "tel", inputMode: "numeric", autoComplete: "tel-national", maxLength: 40, placeholder: "(555) 555-5555" })}
          </div>
        </>}
      </fieldset>
      {error && <p className="quote-error" role="alert">{error}</p>}
      <div className="quote-actions">
        {step > 0 && <button type="button" className="quote-button quote-button--secondary" disabled={sending}
          onClick={() => { setError(""); setStep(step - 1); }}>Previous</button>}
        <div className="quote-actions__forward">
          <button type="submit" className="quote-button" disabled={sending}>
            {sending ? "Sending…" : step === 2 ? "Send quote request" : "Next"}
          </button>
        </div>
      </div>
      <p className="quote-hint quote-footer" role="status">
        {sending ? "Please keep this form open while we send your request." : "Prefer to talk? Call "}
        {!sending && <a href="tel:4696058089">(469) 605-8089</a>}
      </p>
    </form>
  );
}

export default MultistepForm;
