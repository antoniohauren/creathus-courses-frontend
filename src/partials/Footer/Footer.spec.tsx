import { Footer } from "./Footer.stories";
import { render } from "@testing-library/react";

describe("Footer", () => {
  it("Should render the footer partial", () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });
});
