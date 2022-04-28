import { Start } from "./Schedule.stories";
import { render, screen } from "@testing-library/react";

describe("Schedule", () => {
  it("Should render the start element", () => {
    render(<Start variant="start" timeDate={["05/10", "12:00"]} />);
    expect(screen.getByTestId("dateString")).toHaveTextContent(
      "05/10 às 12:00"
    );
  });

  it("Should render the end element", () => {
    render(<Start variant="end" timeDate={"05/10"} />);
    expect(screen.getByTestId("dateString")).toHaveTextContent("05/10");
  });
});
