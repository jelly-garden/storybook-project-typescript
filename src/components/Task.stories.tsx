import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Task from "./Task";

export default {
  title: "components/Task",
  component: Task,
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_PINNED",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_ARCHIVED",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};
