import React, { ReactNode } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TaskItemProps } from "../lib/store";
import TaskList from "./TaskList";

import { Provider } from "react-redux";

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { TaskBoxState } from "../lib/store";

// A super-simple mock of the state of the store
export const MockedState: TaskBoxState = {
  tasks: [
    { id: "1", title: "Task 1", state: "TASK_INBOX" },
    { id: "2", title: "Task 2", state: "TASK_INBOX" },
    { id: "3", title: "Task 3", state: "TASK_INBOX" },
    { id: "4", title: "Task 4", state: "TASK_INBOX" },
    { id: "5", title: "Task 5", state: "TASK_INBOX" },
    { id: "6", title: "Task 6", state: "TASK_INBOX" },
  ],
  status: "idle",
  error: null,
};

// A super-simple mock of a redux store
const Mockstore = ({
  taskboxState,
  children,
}: {
  taskboxState: TaskBoxState;
  children: ReactNode;
}) => {
  const TasksSlice = createSlice({
    name: "taskbox",
    initialState: taskboxState,
    reducers: {
      updateTaskState: (state, action) => {
        const { id, newTaskState } = action.payload;
        const task = state.tasks.findIndex((task) => task.id === id);
        if (task >= 0) {
          state.tasks[task].state = newTaskState;
        }
      },
    },
  });

  const store = configureStore({
    reducer: {
      taskbox: TasksSlice.reducer,
    },
  });

  return <Provider store={store}>{children}</Provider>;
};

export default {
  component: TaskList,
  title: "components/TaskList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  excludeStories: /.*MockedState$/,
} as ComponentMeta<typeof TaskList>;

const Template: ComponentStory<typeof TaskList> = () => <TaskList />;

export const Default = Template.bind({});
Default.decorators = [
  (story) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>,
];

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.decorators = [
  (story) => {
    const pinnedtasks: TaskItemProps[] = [
      ...MockedState.tasks.slice(0, 5),
      { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" },
    ];

    return (
      <Mockstore
        taskboxState={{
          ...MockedState,
          tasks: pinnedtasks,
        }}
      >
        {story()}
      </Mockstore>
    );
  },
];

export const Loading = Template.bind({});
Loading.decorators = [
  (story) => (
    <Mockstore
      taskboxState={{
        ...MockedState,
        status: "loading",
      }}
    >
      {story()}
    </Mockstore>
  ),
];

export const Empty = Template.bind({});
Empty.decorators = [
  (story) => (
    <Mockstore
      taskboxState={{
        ...MockedState,
        tasks: [],
      }}
    >
      {story()}
    </Mockstore>
  ),
];
