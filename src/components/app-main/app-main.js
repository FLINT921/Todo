import React from "react";

import TaskList from "../task-list";
import Footer from "../footer";

import "./app-main.css";

export const AppMain = ({
  tasks,
  tasksCount,
  onDeleted,
  onToggleDone,
  onToggleImportant,
  deleteAllCompletedItem,
  onFilterAll,
  onFilterActive,
  onFilterCompleted,
}) => {
  return (
    <section className="main">
      <TaskList
        tasks={tasks}
        onDeleted={onDeleted}
        onToggleDone={onToggleDone}
        onToggleImportant={onToggleImportant}
      />
      <Footer
        tasksCount={tasksCount}
        deleteAllCompletedItem={deleteAllCompletedItem}
        onFilterAll={onFilterAll}
        onFilterActive={onFilterActive}
        onFilterCompleted={onFilterCompleted}
      />
    </section>
  );
};
