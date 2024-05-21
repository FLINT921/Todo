import React, { Component } from "react";

import Task from "../task";

import "./task-list.css";

export class TaskList extends Component {
    render() {
        const { tasks } = this.props;
        return (
            <ul className="todo-list">
                {tasks.map((task, index) => (
                    <Task key={index} {...task} />
                ))}
            </ul>
        );
    }
}
