import React from 'react';

import NewTaskForm from '../newTaskForm/NewTaskForm';

const Header = ({ addItem }) => {
  return (
    <div className='header'>
      <h1>todos</h1>
      <NewTaskForm addItem={addItem} />
    </div>
  );
};

export default Header;
