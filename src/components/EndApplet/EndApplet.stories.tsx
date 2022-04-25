import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import EndApplet from "./EndApplet.component";

export default {
  title: "Components/EndApplet",
  component: EndApplet,
} as ComponentMeta<typeof EndApplet>;

const Template: ComponentStory<typeof EndApplet> = (args) => (
  <EndApplet {...args} />
);

export const End = Template.bind({});

End.args = {
  timeDate: new Date().toISOString(),
};
