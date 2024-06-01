import React from 'react';

import TaskList from '../task-list';
import Footer from '../footer';

import './app-main.css';

export const AppMain = ({
  tasks,
  tasksCount,
  onDeleted,
  changeEdition,
  changeEditButton,
  onToggleDone,
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
        changeEdition={changeEdition}
        changeEditButton={changeEditButton}
        onToggleDone={onToggleDone}
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
