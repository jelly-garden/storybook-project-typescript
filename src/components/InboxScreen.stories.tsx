import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import InboxScreen from "./InboxScreen";
import store from "../lib/store";

import { Provider } from "react-redux";

export default {
  component: InboxScreen,
  title: "components/InboxScreen",
  decorators: [(story) => <Provider store={store}>{story()}</Provider>],
} as ComponentMeta<typeof InboxScreen>;

const Template: ComponentStory<typeof InboxScreen> = () => <InboxScreen />;

export const Default = Template.bind({});
export const Error = Template.bind({});
