import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "./Header.component";

export default {
  title: "Partials/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Unauthenticated = Template.bind({});
Unauthenticated.args = {};
