import React from "react";

import Task, { TaskItemProps } from "./Task";

interface TaskListProps {
  /** Checks if it's in loading state */
  loading?: boolean;
  /** The list of tasks */
  tasks: TaskItemProps[];
  /** Event to change the task to archived */
  onArchiveTask: (_id: string) => void;
  /** Event to change the task to pinned */
  onPinTask: (_id: string) => void;
}

export default function TaskList({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
}: TaskListProps) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return (
      <div className="list-items" data-testid="loading" key={"loading"}>
        loading
      </div>
    );
  }
  if (tasks.length === 0) {
    return (
      <div className="list-items" key={"empty"} data-testid="empty">
        empty
      </div>
    );
  }

  return (
    <div className="list-items">
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}
