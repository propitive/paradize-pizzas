import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";
import emailjs from "@emailjs/browser";
import MultistepForm from "./MultistepForm";
import userEvent from "@testing-library/user-event";

jest.mock("@emailjs/browser", () => ({ send: jest.fn() }));

const fill = (label, value) => fireEvent.change(screen.getByLabelText(label), { target: { value } });
const next = () => fireEvent.click(screen.getByRole("button", { name: "Next" }));
function eventDetails(venue = "No") {
  fill("Event Date or Timeframe", "A Saturday in November");
  fill("Expected Guest Count", "100");
  fill("Event City or Area", "Dallas");
  fireEvent.click(screen.getByLabelText(venue));
}
function contactDetails() {
  fill("First Name", "Test");
  fill("Last Name", "Customer");
  fill("Email", "test@example.com");
  fill("Phone Number", "469-555-0100");
}

beforeEach(() => { emailjs.send.mockReset(); });

test("requires essential event details even without a reserved venue", () => {
  render(<MultistepForm />);
  next();
  expect(screen.getByText("Step 1 of 3")).toBeInTheDocument();
  eventDetails();
  fill("Expected Guest Count", "0");
  next();
  expect(screen.getByText("Step 1 of 3")).toBeInTheDocument();
  fill("Expected Guest Count", "100");
  fill("Event Date or Timeframe", "   ");
  next();
  expect(screen.getByText("Step 1 of 3")).toBeInTheDocument();
  fill("Event Date or Timeframe", "November");
  next();
  expect(screen.getByRole("progressbar")).toHaveAttribute("aria-valuenow", "2");
  expect(emailjs.send).not.toHaveBeenCalled();
});

test("venue Yes requires its address and both navigation directions preserve answers", () => {
  render(<MultistepForm />);
  eventDetails("Yes");
  next();
  expect(screen.getByText("Step 1 of 3")).toBeInTheDocument();
  fill("Street Address", "123 Main St.");
  fill("State", "TX");
  fill("ZIP Code", "75128");
  next();
  fireEvent.click(screen.getByRole("button", { name: "Previous" }));
  expect(screen.getByLabelText("Street Address")).toHaveValue("123 Main St.");
  expect(screen.getByLabelText("Event Date or Timeframe")).toHaveValue("A Saturday in November");
  next();
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  expect(screen.getByLabelText("First Name")).toBeInTheDocument();
});

test("sends a no-venue quote without stale address values and allows a fresh request after success", async () => {
  emailjs.send.mockResolvedValue({ status: 200 });
  render(<MultistepForm />);
  eventDetails("Yes");
  fill("Street Address", "Old venue");
  fill("State", "TX");
  fill("ZIP Code", "75128");
  fireEvent.click(screen.getByLabelText("No"));
  expect(screen.queryByLabelText("Street Address")).not.toBeInTheDocument();
  next();
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  contactDetails();
  fireEvent.click(screen.getByRole("button", { name: "Send quote request" }));
  await screen.findByText("Your quote request has been sent!");
  expect(emailjs.send).toHaveBeenCalledTimes(1);
  expect(emailjs.send.mock.calls[0][2]).toMatchObject({
    "user-name": "Test Customer", "user-email": "test@example.com",
    event_date: "A Saturday in November", attendance: "100", phone: "(469) 555-0100",
    has_venue: false, venue_reserved: "No", street_address: "", state: "", zip_code: "",
    location: "Dallas (venue not reserved yet)", pizzas: "Not specified",
  });
  fireEvent.click(screen.getByRole("button", { name: "Start a new request" }));
  expect(screen.getByLabelText("Event City or Area")).toHaveValue("");
});

test("requires valid contact information, prevents duplicate sends, and retains details for retry", async () => {
  let rejectSend;
  emailjs.send.mockImplementationOnce(() => new Promise((resolve, reject) => { rejectSend = reject; }));
  render(<MultistepForm />);
  eventDetails(); next();
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  contactDetails();
  fill("Email", "invalid");
  fireEvent.click(screen.getByRole("button", { name: "Send quote request" }));
  expect(emailjs.send).not.toHaveBeenCalled();
  expect(screen.getByLabelText("Email").validationMessage).toBe("Please enter an email address like name@example.com.");
  fill("Email", "test@example");
  fireEvent.click(screen.getByRole("button", { name: "Send quote request" }));
  expect(emailjs.send).not.toHaveBeenCalled();
  fill("Email", "test@example.com");
  fill("Phone Number", "123");
  fireEvent.click(screen.getByRole("button", { name: "Send quote request" }));
  expect(emailjs.send).not.toHaveBeenCalled();
  expect(screen.getByLabelText("Phone Number").validationMessage).toBe("Please enter a complete 10-digit phone number.");
  fill("Phone Number", "469-555-0100");
  fireEvent.click(screen.getByRole("button", { name: "Send quote request" }));
  const sendingButton = screen.getByRole("button", { name: "Sending…" });
  expect(sendingButton).toBeDisabled();
  fireEvent.submit(sendingButton.closest("form"));
  expect(emailjs.send).toHaveBeenCalledTimes(1);
  await act(async () => rejectSend(new Error("Network failure")));
  expect(screen.getByRole("alert")).toHaveTextContent("Your answers are saved");
  expect(screen.getByLabelText("Email")).toHaveValue("test@example.com");
  emailjs.send.mockResolvedValue({ status: 200 });
  fireEvent.click(screen.getByRole("button", { name: "Send quote request" }));
  await waitFor(() => expect(screen.getByText("Your quote request has been sent!")).toBeInTheDocument());
  expect(emailjs.send).toHaveBeenCalledTimes(2);
});

test("phone mask formats typing and pasted numbers and permits editing across separators", () => {
  render(<MultistepForm />);
  eventDetails(); next(); next();
  const phone = screen.getByLabelText("Phone Number");
  act(() => userEvent.type(phone, "4695550100"));
  expect(phone).toHaveValue("(469) 555-0100");
  act(() => userEvent.keyboard("{backspace}"));
  expect(phone).toHaveValue("(469) 555-010");
  act(() => userEvent.keyboard("0"));
  phone.setSelectionRange(6, 6);
  act(() => userEvent.keyboard("{backspace}"));
  expect(phone).toHaveValue("(465) 550-100");
  act(() => userEvent.clear(phone));
  expect(phone).toHaveValue("");
  fireEvent.change(phone, { target: { value: "+1 (469) 555-0100" } });
  expect(phone).toHaveValue("(469) 555-0100");
});

test("multiple food selections and explicit No add-ons are included in a reserved-venue email", async () => {
  emailjs.send.mockResolvedValue({ status: 200 });
  render(<MultistepForm />);
  eventDetails("Yes");
  fill("Street Address", "123 Main St."); fill("State", "TX"); fill("ZIP Code", "75128"); next();
  const appetizerInput = screen.getByLabelText("Appetizers");
  fireEvent.keyDown(appetizerInput, { key: "ArrowDown", code: "ArrowDown" });
  fireEvent.click(screen.getByText("Sausage Lollipop"));
  fireEvent.click(screen.getByText("Chicken Bacon Wrap"));
  fireEvent.keyDown(appetizerInput, { key: "Escape", code: "Escape" });
  const boardInput = screen.getByLabelText("Charcuterie Board (optional add-on)");
  fireEvent.keyDown(boardInput, { key: "ArrowDown", code: "ArrowDown" });
  fireEvent.click(screen.getByText("No"));
  next(); contactDetails();
  fireEvent.click(screen.getByRole("button", { name: "Send quote request" }));
  await screen.findByText("Your quote request has been sent!");
  expect(emailjs.send.mock.calls[0][2]).toMatchObject({
    has_venue: true, venue_reserved: "Yes", street_address: "123 Main St.",
    state: "TX", zip_code: "75128", location: "123 Main St., Dallas, TX, 75128",
    appetizers: "Sausage Lollipop, Chicken Bacon Wrap", charcuterie: "No",
  });
});
