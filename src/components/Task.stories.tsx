import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Task from "./Task";
import { TaskItemProps } from "../lib/store";

export default {
  component: Task,
  title: "components/Task",
} as ComponentMeta<typeof Task>;

const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...(Default.args.task as TaskItemProps),
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    ...(Default.args.task as TaskItemProps),
    state: "TASK_ARCHIVED",
  },
};
