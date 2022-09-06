import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TaskItemProps } from "./Task";
import TaskList from "./TaskList";

export default {
  component: TaskList,
  title: "components/TaskList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = (args) => (
  <TaskList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  // Shaping the stories through args composition.
  // The data was inherited from the Default story in Task.stories.js.
  tasks: [
    {
      id: "1",
      title: "Task 1",
      state: "TASK_INBOX",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "2",
      title: "Task 2",
      state: "TASK_INBOX",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "3",
      title: "Task 3",
      state: "TASK_INBOX",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "4",
      title: "Task 4",
      state: "TASK_INBOX",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "5",
      title: "Task 5",
      state: "TASK_INBOX",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
    {
      id: "6",
      title: "Task 6",
      state: "TASK_INBOX",
      updatedAt: new Date(2021, 0, 1, 9, 0),
    },
  ],
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Default story.
  tasks: [
    ...(Default.args.tasks as TaskItemProps[]).slice(0, 5),
    { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};

export const Empty = Template.bind({});
Empty.args = {
  // Shaping the stories through args composition.
  // Inherited data coming from the Loading story.
  ...Loading.args,
  loading: false,
};
