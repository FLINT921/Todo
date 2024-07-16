import React from 'react';

import TaskFilter from '../TaskFilter/TaskFilter';

const Footer = ({ deleteAllCompletedItem, tasksCount, setFilter, filter }) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>{tasksCount} items left</span>
      <TaskFilter setFilter={setFilter} filter={filter} />
      <button className='clear-completed' onClick={deleteAllCompletedItem}>
        Clear completed
      </button>
    </footer>
  );
};

export default Footer;
