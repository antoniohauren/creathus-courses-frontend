import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Schedule from "./Schedule.component";

export default {
  title: "Components/Schedule",
  component: Schedule,
  argTypes: {
    variant: {
      options: ["start", "end"],
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Schedule>;

const Template: ComponentStory<typeof Schedule> = (args) => (
  <Schedule {...args} />
);

export const Start = Template.bind({});
Start.args = {
  timeDate: new Date().toISOString(),
  variant: "start",
};

export const End = Template.bind({});
End.args = {
  timeDate: new Date().toISOString(),
  variant: "end",
};
