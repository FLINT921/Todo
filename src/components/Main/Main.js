import React from 'react';

import TaskList from '../taskList/TaskList';

const Main = ({ tasks, onToggleDone, deleteItem, changeEditButton, changeEdition }) => {
  return (
    <section className='main'>
      <TaskList
        tasks={tasks}
        onToggleDone={onToggleDone}
        deleteItem={deleteItem}
        changeEditButton={changeEditButton}
        changeEdition={changeEdition}
      />
    </section>
  );
};

export default Main;
