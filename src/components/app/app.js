import React, { Component } from "react";

import AppHeader from "../app-header";
import AppMain from "../app-main";

import "./app.css";

export class App extends Component {
  maxId = 100;

  state = {
    taskData: [
      this.createTaskItem("Completed task", 1716962823934),
      this.createTaskItem("Editing task", 1716962823934),
      this.createTaskItem("Active task", 1716963124428),
    ],
  };

  createTaskItem(description, date) {
    return {
      id: this.maxId++,
      description: description,
      created: date,
      done: false,
      edition: false,
    };
  }

  addItem = (text) => {
    const newItem = this.createTaskItem(text, new Date().getTime());
    this.setState(({ taskData }) => {
      const newArray = [...taskData, newItem];
      return {
        taskData: newArray,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id);
      const newArray = [...taskData.slice(0, idx), ...taskData.slice(idx + 1)];

      return {
        taskData: newArray,
      };
    });
  };
  deleteAllCompletedItem = () => {
    this.setState(({ taskData }) => {
      const newArray = taskData.filter((el) => !el.done);

      return {
        taskData: newArray,
      };
    });
  };

  onFilterAll = () => {
    this.setState(({ taskData }) => {
      console.log(1);
      return {
        taskData: taskData,
      };
    });
  };
  onFilterActive = () => {
    this.setState(({ taskData }) => {
      console.log(2);
      return {
        taskData: taskData,
      };
    });
  };
  onFilterCompleted = () => {
    this.setState(({ taskData }) => {
      console.log(3);
      return {
        taskData: taskData,
      };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ taskData }) => {
      const idx = taskData.findIndex((el) => el.id === id);
      const oldItem = taskData[idx];
      const newItem = { ...oldItem, done: !oldItem.done };

      const newArray = [
        ...taskData.slice(0, idx),
        newItem,
        ...taskData.slice(idx + 1),
      ];

      return {
        taskData: newArray,
      };
    });
  };

  render() {
    const { taskData } = this.state;
    const tasksCount = this.state.taskData.filter((el) => !el.done).length;
    console.log(taskData);
    return (
      <section className="todoapp">
        <AppHeader onAdd={this.addItem} />
        <AppMain
          tasks={taskData}
          tasksCount={tasksCount}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
          deleteAllCompletedItem={this.deleteAllCompletedItem}
          onFilterAll={this.onFilterAll}
          onFilterActive={this.onFilterActive}
          onFilterCompleted={this.onFilterCompleted}
        />
      </section>
    );
  }
}
