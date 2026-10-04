import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App/App";

beforeAll(() => {
  HTMLDialogElement.prototype.showModal = function () { this.setAttribute("open", ""); };
  HTMLDialogElement.prototype.close = function () { this.removeAttribute("open"); };
});

test.each(["pizza", "appetizer", "salad", "dessert", "pasta", "gallery"])(
  "%s photos open in a dismissible modal with the correct image and name",
  (category) => {
    render(<MemoryRouter initialEntries={[category === "gallery" ? "/gallery" : `/menu/${category}`]}><App /></MemoryRouter>);
    const trigger = screen.getAllByRole("button", { name: /^View .+ photo$/ })[0];
    const thumbnail = within(trigger).getByRole("img");
    trigger.focus();
    fireEvent.click(trigger);
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByRole("img")).toHaveAttribute("src", thumbnail.getAttribute("src"));
    expect(within(dialog).getByRole("heading")).toHaveTextContent(thumbnail.alt);
    expect(document.body.style.overflow).toBe("hidden");
    fireEvent.click(within(dialog).getByRole("img"));
    expect(dialog).toHaveAttribute("open");
    fireEvent.click(within(dialog).getByRole("button", { name: "Close photo" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(document.body.style.overflow).toBe("");
    expect(document.activeElement).toBe(trigger);

    fireEvent.click(trigger);
    fireEvent.click(screen.getByRole("dialog"));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    fireEvent.click(trigger);
    act(() => screen.getByRole("dialog").dispatchEvent(new Event("cancel", { cancelable: true })));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  }
);
