import React, { Component } from "react";

import AppHeader from "../app-header";
import AppMain from "../app-main";

import "./app.css";

export class App extends Component {
    maxId = 0;

    state = {
        taskData: [this.createTaskItem("Completed task", 1716962823934), this.createTaskItem("Editing task", 1716962823934), this.createTaskItem("Active task", 1716963124428)],
        filter: "all",
    };

    createTaskItem(description, date) {
        return {
            id: this.maxId++,
            description: description,
            created: date,
            done: false,
            edition: false,
            display: true,
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
            console.log(newArray);
            return {
                taskData: newArray,
            };
        });
    };

    onFilterTasks = (tasks, filter) => {
        switch (filter) {
            case "active":
                return tasks.filter((el) => !el.done);
            case "completed":
                return tasks.filter((el) => el.done);
            case "all":
            default:
                return tasks;
        }
    };

    onFilterAll = () => {
        this.setState({
            filter: "all",
        });
    };
    onFilterActive = () => {
        this.setState({
            filter: "active",
        });
    };
    onFilterCompleted = () => {
        this.setState({
            filter: "completed",
        });
    };

    onToggleDone = (id) => {
        this.setState(({ taskData }) => {
            const idx = taskData.findIndex((el) => el.id === id);
            const oldItem = taskData[idx];
            const newItem = { ...oldItem, done: !oldItem.done };

            const newArray = [...taskData.slice(0, idx), newItem, ...taskData.slice(idx + 1)];

            return {
                taskData: newArray,
            };
        });
    };

    render() {
        const { taskData, filter } = this.state;
        const visibleTasks = this.onFilterTasks(taskData, filter);
        const tasksCount = taskData.filter((el) => !el.done).length;
        console.log(taskData);
        return (
            <section className="todoapp">
                <AppHeader onAdd={this.addItem} />
                <AppMain
                    tasks={visibleTasks}
                    tasksCount={tasksCount}
                    onDeleted={this.deleteItem}
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
