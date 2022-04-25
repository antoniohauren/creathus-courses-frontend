import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button.component";

export default {
  title: "Components/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  active: true,
  label: "Button Label",
};
