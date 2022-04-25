import { Primary } from "./Button.stories";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  it("Should render the element", () => {
    render(<Primary label="Button Label" {...Primary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent(/button label/i);
  });

  it("should have active true by default", () => {
    render(<Primary label="Button Label" />);
    expect(screen.getByRole("button")).toHaveTextContent(/button label/i);
  });

  it("Should render disabled button", () => {
    render(<Primary active={false} label="Button Label" />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
});
