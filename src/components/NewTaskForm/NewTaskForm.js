import React, { useState } from 'react';

export const NewTaskForm = ({ addItem }) => {
  const [title, setTitle] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const onLabelChange = (e) => {
    setTitle(e.target.value);
  };

  const onLabelMinutes = (e) => {
    setMinutes(e.target.value);
  };

  const onLabelSeconds = (e) => {
    setSeconds(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (title.length !== 0) {
      addItem(title, minutes * 60000 + seconds * 1000);
      setTitle('');
      setMinutes('');
      setSeconds('');
    }
  };
  return (
    <form className='new-todo-form' onSubmit={onSubmit}>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        onChange={onLabelChange}
        value={title}
        autoFocus
      />
      <input className='new-todo-form__timer' placeholder='Min' onChange={onLabelMinutes} value={minutes} />
      <input className='new-todo-form__timer' placeholder='Sec' onChange={onLabelSeconds} value={seconds} />
      <button type='submit' style={{ display: 'none' }}>
        Add
      </button>
    </form>
  );
};
