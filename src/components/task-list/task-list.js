import React, { Component } from "react";

import Task from "../task";

import "./task-list.css";

export class TaskList extends Component {
  render() {
    const { tasks, onDeleted, onToggleDone, onToggleImportant } = this.props;
    return (
      <ul className="todo-list">
        {tasks.map((task) => (
          <Task
            key={task.id}
            {...task}
            onDeleted={() => onDeleted(task.id)}
            onToggleDone={() => onToggleDone(task.id)}
            onToggleImportant={() => onToggleImportant(task.id)}
          />
        ))}
      </ul>
    );
  }
}
