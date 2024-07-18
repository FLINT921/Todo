import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';

import StopWatch from '../stopWatch/StopWatch';

const Task = ({
  id,
  title,
  created,
  timer,
  done,
  edition,
  onToggleDone,
  deleteItem,
  changeEditButton,
  changeEdition,
}) => {
  const [localTitle, setLocalTitle] = useState(title);

  const creationTimeItem = (date) => {
    const createTime = new Date(date);
    const result = formatDistanceToNow(createTime, {
      includeSeconds: true,
    });
    return result;
  };
  const onTextChange = (el) => {
    const inputValue = el.target.value;
    console.log(inputValue, inputValue.length);

    if (inputValue !== ' ') {
      setLocalTitle(inputValue);
    }
  };

  const onSubmit = (el) => {
    el.preventDefault();
    if (localTitle.length === 0) {
      changeEdition(title);
      setLocalTitle(title);
    } else {
      changeEdition(localTitle);
      setLocalTitle(localTitle);
    }
  };

  let classNames = '';
  if (done) {
    classNames += 'completed';
  } else if (edition) {
    classNames += 'editing';
  }
  return (
    <li className={classNames}>
      <div className='view'>
        <input className='toggle' type='checkbox' onChange={() => onToggleDone(id)} />
        <label>
          <span className='title'>{title}</span>
          <span className='description'>
            <StopWatch timer={timer} id={id} />
          </span>
          <span className='created'>created {creationTimeItem(created)} ago</span>
        </label>
        <button className='icon icon-edit' onClick={() => changeEditButton(id)}></button>
        <button className='icon icon-destroy' onClick={() => deleteItem(id)}></button>
      </div>
      {edition && (
        <form onSubmit={onSubmit}>
          <input className='edit' placeholder='Input Text' onChange={onTextChange} value={localTitle} autoFocus />
        </form>
      )}
    </li>
  );
};

export default Task;
