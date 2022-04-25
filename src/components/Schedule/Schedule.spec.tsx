import { Start } from "./Schedule.stories";
import { render, screen } from "@testing-library/react";

describe("Schedule", () => {
  const fakeDate = "2011-10-05T15:00:00.000Z";
  it("Should render the start element", () => {
    render(<Start variant="start" timeDate={fakeDate} />);
    expect(screen.getByTestId("dateString")).toHaveTextContent(
      "05/10 às 12:00"
    );
  });

  it("Should render the end element", () => {
    render(<Start variant="end" timeDate={fakeDate} />);
    expect(screen.getByTestId("dateString")).toHaveTextContent("05/10");
  });
});
