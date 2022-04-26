import { Authenticated, Unauthenticated } from "./Header.stories";
import { render, screen } from "@testing-library/react";

describe("Header", () => {
  it("Should render the unauthenticated element", () => {
    const { container } = render(<Unauthenticated />);
    expect(container).toBeInTheDocument();
  });

  it("Should render the authenticated element", () => {
    const { container } = render(<Authenticated authenticatedUser="Antonio" />);

    expect(container).toBeInTheDocument();
    expect(screen.getByTestId("user")).toHaveTextContent(/antonio/i);
  });
});
