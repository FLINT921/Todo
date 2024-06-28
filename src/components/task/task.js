import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';

import './task.css';
import Stopwatch from '../stop-watch/stop-watch';

export class Task extends Component {
  creationTimeItem(date) {
    const createTime = new Date(date);
    const result = formatDistanceToNow(createTime, {
      includeSeconds: true,
    });
    return result;
  }
  state = {
    title: '',
  };
  onTextChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.length !== 0) this.props.changeEdition(this.state.title);
    this.setState({
      title: '',
    });
  };

  render() {
    const { id, title, timer, created, done, edition, onDeleted, changeEditButton, onToggleDone } = this.props;

    let classNames = '';
    if (done) {
      classNames += 'completed';
    } else if (edition) {
      classNames += 'editing';
    } else if (!done && !edition) {
      classNames = '';
    }
    return (
      <li key={id} className={classNames}>
        <div className='view'>
          <input className='toggle' type='checkbox' onChange={onToggleDone} />
          <label>
            <span className='title'>{title}</span>
            <span className='description'>
              <Stopwatch timer={timer} id={id} />
            </span>
            <span className='created'>created {this.creationTimeItem(created)} ago</span>
          </label>
          <button className='icon icon-edit' onClick={changeEditButton}></button>
          <button className='icon icon-destroy' onClick={onDeleted}></button>
        </div>
        <form onSubmit={this.onSubmit}>
          <input className='edit' placeholder={title} onChange={this.onTextChange} autoFocus />
        </form>
      </li>
    );
  }
  static propTypes = {
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    description: PropTypes.string.isRequired,
    created: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]).isRequired,
    done: PropTypes.bool.isRequired,
    edition: PropTypes.bool.isRequired,
    onDeleted: PropTypes.func.isRequired,
    onToggleDone: PropTypes.func.isRequired,
    changeEditButton: PropTypes.func.isRequired,
    changeEdition: PropTypes.func.isRequired,
  };
}

Task.defaultProps = {
  id: 0,
  description: '',
  done: false,
  edition: false,
  onDeleted: () => {},
  onToggleDone: () => {},
};
