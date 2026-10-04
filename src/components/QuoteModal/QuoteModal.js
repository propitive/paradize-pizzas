import { createContext, useContext, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useHistory } from "react-router-dom";
import MultistepForm from "../MultistepForm/MultistepForm";
import "./QuoteModal.css";

const QuoteContext = createContext(null);
export const useQuoteModal = () => useContext(QuoteContext);

export function QuoteProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const openQuote = (trigger) => {
    triggerRef.current = trigger || document.activeElement;
    setIsOpen(true);
  };
  return (
    <QuoteContext.Provider value={{ openQuote }}>
      {children}
      <QuoteModal isOpen={isOpen} triggerRef={triggerRef} onClose={() => setIsOpen(false)} />
    </QuoteContext.Provider>
  );
}

function QuoteModal({ isOpen, triggerRef, onClose }) {
  const history = useHistory();
  const dialogRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    if (!isOpen) {
      if (dialog.open) dialog.close();
      // Restore focus after React finishes restoring the previous DOM selection.
      triggerRef.current?.focus();
      return;
    }
    const previousOverflow = document.body.style.overflow;
    if (!dialog.open) dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [isOpen, triggerRef]);

  const close = () => { if (!sending) onClose(); };
  return createPortal(
    <dialog ref={dialogRef} className="quote-dialog" aria-labelledby="quote-title"
      onCancel={(event) => { event.preventDefault(); close(); }}
      onClick={(event) => { if (event.target === event.currentTarget) close(); }}>
      <div className="quote-dialog__content">
        <button type="button" className="quote-dialog__close" aria-label="Close quote form"
          disabled={sending} onClick={close}>×</button>
        <header className="quote-dialog__header">
          <h2 id="quote-title">{sent ? "Your Quote Request Has Been Sent!" : "Let’s Talk Toppings & Timelines"}</h2>
        </header>
        <MultistepForm isActive={isOpen} onClose={close} onSendingChange={setSending}
          onSentChange={setSent} onViewGallery={() => { close(); history.push("/gallery"); }} />
      </div>
    </dialog>, document.body
  );
}

export default QuoteModal;
