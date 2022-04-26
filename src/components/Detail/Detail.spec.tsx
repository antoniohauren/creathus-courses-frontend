import { Lessons } from "./Detail.stories";
import { render, screen } from "@testing-library/react";

describe("Detail", () => {
  it("Should render the lessons details", () => {
    render(<Lessons variant="lessons" content="3 aulas" />);
    expect(screen.getByTestId("content")).toHaveTextContent(/aulas/i);
  });
});
