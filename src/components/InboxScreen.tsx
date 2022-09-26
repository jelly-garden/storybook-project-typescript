import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch, fetchTasks } from "../lib/store";
import TaskList from "./TaskList";

export default function InboxScreen() {
  const dispatch = useDispatch<AppDispatch>();
  // We're retrieving the error field from our updated store
  const { error } = useSelector((state: RootState) => state.taskbox);
  // The useEffect triggers the data fetching when the component is mounted
  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  if (error) {
    return (
      <div className="page lists-show">
        <div className="wrapper-message">
          <span className="icon-face-sad" />
          <div className="title-message">Oh no!</div>
          <div className="subtitle-message">Something went wrong</div>
        </div>
      </div>
    );
  }
  return (
    <div className="page lists-show">
      <nav>
        <h1 className="title-page">
          <span className="title-wrapper">Taskbox</span>
        </h1>
      </nav>
      <TaskList />
    </div>
  );
}