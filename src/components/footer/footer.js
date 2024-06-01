import React from 'react';

import TasksFilter from '../tasks-filter';

import './footer.css';

export const Footer = ({ tasksCount, deleteAllCompletedItem, onFilterAll, onFilterActive, onFilterCompleted }) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>{tasksCount} items left</span>
      <TasksFilter onFilterAll={onFilterAll} onFilterActive={onFilterActive} onFilterCompleted={onFilterCompleted} />
      <button onClick={deleteAllCompletedItem} className='clear-completed'>
        Clear completed
      </button>
    </footer>
  );
};
