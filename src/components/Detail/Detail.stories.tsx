import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Detail from "./Detail.component";

export default {
  title: "Components/Detail",
  component: Detail,
  argTypes: {
    variant: {
      options: ["lessons", "time", "instructors", "location"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Detail>;

const Template: ComponentStory<typeof Detail> = (args) => <Detail {...args} />;

export const Lessons = Template.bind({});
Lessons.args = {
  variant: "lessons",
  content: "3 AULAS",
};

export const TotalTime = Template.bind({});
TotalTime.args = {
  variant: "time",
  content: "12H Total",
};

export const Instructors = Template.bind({});
Instructors.args = {
  variant: "instructors",
  content: "Antonio carlos, Daniel queiroz",
};

export const Location = Template.bind({});
Location.args = {
  variant: "location",
  content: "campus manaus",
};
