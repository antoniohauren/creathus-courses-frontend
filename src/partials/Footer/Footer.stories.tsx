import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import FooterComponent from "./Footer.component";

export default {
  title: "Partials/Footer",
  component: FooterComponent,
} as ComponentMeta<typeof FooterComponent>;

const Template: ComponentStory<typeof FooterComponent> = (args) => (
  <FooterComponent {...args} />
);

export const Footer = Template.bind({});
Footer.args = {
  authenticatedUser: "",
};
