import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import App from "./components/App/App";
import emailjs from "@emailjs/browser";

jest.mock("@emailjs/browser", () => ({ send: jest.fn() }));
beforeEach(() => emailjs.send.mockReset());

// JSDOM has no native dialog implementation. Emulate its open/close state;
// browser focus trapping and responsive layout still need a manual preview.
beforeAll(() => {
  jest.spyOn(window, "scrollTo").mockImplementation(() => {});
  HTMLDialogElement.prototype.showModal = function () { this.setAttribute("open", ""); };
  HTMLDialogElement.prototype.close = function () { this.removeAttribute("open"); };
});
afterAll(() => window.scrollTo.mockRestore());

function openForm() {
  const trigger = screen.getAllByRole("button", { name: "GET A QUOTE" })[0];
  trigger.focus();
  fireEvent.click(trigger);
  return trigger;
}

test("quote CTA opens the modal without leaving the current page and preserves a draft on closing", () => {
  render(<MemoryRouter initialEntries={["/contact-form"]}><App /></MemoryRouter>);
  const trigger = openForm();
  const dialog = screen.getByRole("dialog");
  expect(dialog).toHaveAttribute("open");
  expect(screen.getByRole("heading", { name: "Request a Quote" })).toBeInTheDocument();
  fireEvent.change(screen.getByLabelText("Event Date or Timeframe"), { target: { value: "November" } });
  expect(document.body.style.overflow).toBe("hidden");
  fireEvent.click(screen.getByRole("button", { name: "Close quote form" }));
  expect(dialog).not.toHaveAttribute("open");
  expect(document.body.style.overflow).toBe("");
  expect(document.activeElement).toBe(trigger);
  openForm();
  expect(screen.getByLabelText("Event Date or Timeframe")).toHaveValue("November");
  fireEvent.click(screen.getByRole("heading", { name: "Your event" }));
  expect(dialog).toHaveAttribute("open");
  fireEvent.click(dialog);
  expect(dialog).not.toHaveAttribute("open");
});

test("the dialog cancel event closes the modal (native Escape path)", () => {
  render(<MemoryRouter initialEntries={["/contact-form"]}><App /></MemoryRouter>);
  openForm();
  const dialog = screen.getByRole("dialog");
  act(() => dialog.dispatchEvent(new Event("cancel", { bubbles: false, cancelable: true })));
  expect(dialog).not.toHaveAttribute("open");
});

test("keeps the modal open while sending and permits closing after success", async () => {
  let resolveSend;
  emailjs.send.mockImplementationOnce(() => new Promise((resolve) => { resolveSend = resolve; }));
  const history = createMemoryHistory({ initialEntries: ["/contact-form"] });
  render(<Router history={history}><App /></Router>);
  openForm();
  const fill = (label, value) => fireEvent.change(screen.getByLabelText(label), { target: { value } });
  fill("Event Date or Timeframe", "November");
  fill("Expected Guest Count", "100");
  fill("Event City or Area", "Dallas");
  fireEvent.click(screen.getByLabelText("No"));
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  fill("First Name", "Test"); fill("Last Name", "Customer");
  fill("Email", "test@example.com"); fill("Phone Number", "469-555-0100");
  fireEvent.click(screen.getByRole("button", { name: "Send quote request" }));
  const dialog = screen.getByRole("dialog");
  expect(screen.getByRole("button", { name: "Close quote form" })).toBeDisabled();
  fireEvent.click(dialog);
  act(() => dialog.dispatchEvent(new Event("cancel", { cancelable: true })));
  expect(dialog).toHaveAttribute("open");
  await act(async () => resolveSend({ status: 200 }));
  expect(screen.getByRole("heading", { name: "Your Quote Request Is Sent!" })).toBeInTheDocument();
  expect(screen.getByText("Explore our gallery for a little inspiration.")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Done" }));
  expect(dialog).not.toHaveAttribute("open");
  openForm();
  expect(screen.getByLabelText("Event Date or Timeframe")).toHaveValue("");
  fireEvent.change(screen.getByLabelText("Event Date or Timeframe"), { target: { value: "December" } });
  fireEvent.change(screen.getByLabelText("Expected Guest Count"), { target: { value: "50" } });
  fireEvent.change(screen.getByLabelText("Event City or Area"), { target: { value: "Dallas" } });
  fireEvent.click(screen.getByLabelText("No"));
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  fireEvent.click(screen.getByRole("button", { name: "Next" }));
  fill("First Name", "Test"); fill("Last Name", "Customer");
  fill("Email", "test@example.com"); fill("Phone Number", "4695550100");
  emailjs.send.mockResolvedValue({ status: 200 });
  fireEvent.click(screen.getByRole("button", { name: "Send quote request" }));
  await screen.findByRole("heading", { name: "Your Quote Request Is Sent!" });
  fireEvent.click(screen.getByRole("button", { name: "View Gallery" }));
  expect(history.location.pathname).toBe("/gallery");
  expect(dialog).not.toHaveAttribute("open");
});
