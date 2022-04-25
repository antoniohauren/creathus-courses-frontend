import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Schedule from "./Schedule.component";

export default {
  title: "Components/Schedule",
  component: Schedule,
} as ComponentMeta<typeof Schedule>;

const Template: ComponentStory<typeof Schedule> = (args) => (
  <Schedule {...args} />
);

export const Start = Template.bind({});

Start.args = {
  timeDate: new Date().toISOString(),
  type: "start",
};
