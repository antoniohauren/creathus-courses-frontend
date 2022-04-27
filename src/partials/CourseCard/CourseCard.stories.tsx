import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import CourseCard from "./CourseCard.component";

export default {
  title: "Partials/CourseCard",
  component: CourseCard,
} as ComponentMeta<typeof CourseCard>;

const Template: ComponentStory<typeof CourseCard> = (args) => (
  <CourseCard {...args} />
);

export const Closed = Template.bind({});
Closed.args = {
  trail: "android",
  title: "Webservices com Retrofit e imagens glide",
  start_time: new Date().toISOString(),
  end_time: new Date().toISOString(),
  lessons: "5",
  lessons_time: "60",
  instructors: ["teste 1", "test2", "teste3"],
  location: "campus manaus",
  registrations_on: "11/05",
};
