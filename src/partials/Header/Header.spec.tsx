import { Unauthenticated } from "./Header.stories";
import { render } from "@testing-library/react";

describe("Header", () => {
  it("Should render the unauthenticated element", () => {
    const { container } = render(<Unauthenticated />);
    expect(container).toBeInTheDocument();
  });
});
