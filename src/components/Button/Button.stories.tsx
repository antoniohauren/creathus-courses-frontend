import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button.component";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Active = Template.bind({});

Active.args = {
  active: true,
  label: "Button Label",
};
