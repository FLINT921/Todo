import React from 'react';

const TaskFilter = ({ setFilter, filter }) => {
  return (
    <ul className='filters'>
      <li>
        <button
          onClick={() => {
            setFilter('all');
          }}
          className={filter === 'all' ? 'selected' : ''}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setFilter('active');
          }}
          className={filter === 'active' ? 'selected' : ''}
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setFilter('completed');
          }}
          className={filter === 'completed' ? 'selected' : ''}
        >
          Completed
        </button>
      </li>
    </ul>
  );
};

export default TaskFilter;
