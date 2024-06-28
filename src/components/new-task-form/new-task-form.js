import React, { Component } from 'react';

import './new-task-form.css';

export class NewTaskForm extends Component {
  state = {
    title: '',
    minutes: '',
    seconds: '',
  };

  onLabelChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  onLabelMinutes = (e) => {
    this.setState({
      minutes: e.target.value,
    });
  };

  onLabelSeconds = (e) => {
    this.setState({
      seconds: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.length !== 0) {
      this.props.onAdd(this.state.title, this.state.minutes * 60000 + this.state.seconds * 1000);
      this.setState({
        title: '',
        minutes: '',
        seconds: '',
      });
    }
  };

  render() {
    return (
      <form className='new-todo-form' onSubmit={this.onSubmit}>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          onChange={this.onLabelChange}
          value={this.state.title}
          autoFocus
        />
        <input
          className='new-todo-form__timer'
          placeholder='Min'
          onChange={this.onLabelMinutes}
          value={this.state.minutes}
        />
        <input
          className='new-todo-form__timer'
          placeholder='Sec'
          onChange={this.onLabelSeconds}
          value={this.state.seconds}
        />
        <button type='submit' style={{ display: 'none' }}>
          Add
        </button>
      </form>
    );
  }
}
