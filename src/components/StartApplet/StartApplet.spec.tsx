import { Start } from "./StartApplet.stories";
import { render, screen } from "@testing-library/react";

describe("StartApplet", () => {
  it("Should render the element", () => {
    const fakeDate = "2011-10-05T15:00:00.000Z";
    render(<Start timeDate={fakeDate} />);
    expect(screen.getByTestId("dateString")).toHaveTextContent(
      "05/10 as 12:00"
    );
  });
});
