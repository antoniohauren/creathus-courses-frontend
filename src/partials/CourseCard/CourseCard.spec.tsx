import { Closed, RegistrationsOn } from "./CourseCard.stories";
import { render, screen } from "@testing-library/react";

describe("CourseCard", () => {
  const closedProps = {
    trail: "android",
    title: "Webservices com Retrofit e imagens glide",
    start_time: ["11/05", "11:50"],
    end_time: "11/05",
    lessons: 5,
    lessons_time: 120,
    instructors: ["teste 1", "test2", "teste3"],
    location: "campus manaus",
    registrations_on: "11/05",
  };

  it("Should render the Closed element", () => {
    const { container } = render(<Closed {...closedProps} />);
    expect(container).toBeInTheDocument();
  });

  it("should render the registranstion element", () => {
    const { container } = render(
      <RegistrationsOn {...closedProps} registrations_on={undefined} />
    );
    expect(container).toBeInTheDocument();
  });

  it("should render the m if total time is less than 60 minutes", () => {
    const { container } = render(
      <RegistrationsOn
        {...closedProps}
        registrations_on={undefined}
        lessons_time={20}
      />
    );
    expect(container).toBeInTheDocument();
    expect(screen.getByText(/total/i)).toHaveTextContent(/20m/i);
  });
});
