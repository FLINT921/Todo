import React, { Component } from 'react';

import './new-task-form.css';

export class NewTaskForm extends Component {
  state = {
    description: '',
  };
  onLabelChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.description.length !== 0) this.props.onAdd(this.state.description);
    this.setState({
      description: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          className='new-todo'
          placeholder='What needs to be done?'
          onChange={this.onLabelChange}
          value={this.state.description}
          autoFocus
        ></input>
      </form>
    );
  }
}
