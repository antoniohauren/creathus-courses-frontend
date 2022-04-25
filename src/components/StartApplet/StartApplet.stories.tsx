import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import StartApplet from "./StartApplet.component";

export default {
  title: "Components/StartApplet",
  component: StartApplet,
} as ComponentMeta<typeof StartApplet>;

const Template: ComponentStory<typeof StartApplet> = (args) => (
  <StartApplet {...args} />
);

export const Start = Template.bind({});

Start.args = {
  timeDate: new Date().toISOString(),
};
