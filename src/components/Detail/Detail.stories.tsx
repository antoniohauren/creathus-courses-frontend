import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Detail from "./Detail.component";

export default {
  title: "Components/Detail",
  component: Detail,
} as ComponentMeta<typeof Detail>;

const Template: ComponentStory<typeof Detail> = (args) => <Detail {...args} />;

export const Lessons = Template.bind({});
Lessons.args = {
  variant: "lessons",
  content: "3 AULAS",
};
