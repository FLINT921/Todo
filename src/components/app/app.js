import React, { Component } from "react";

import AppHeader from "../app-header";
import AppMain from "../app-main";

import "./app.css";

export class App extends Component {
    maxId = 100;

    state = {
        taskData: [this.createTaskItem("Completed task", 1716928799), this.createTaskItem("Editing task", 17169289), this.createTaskItem("Active task", 1716917989)],
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
        const now = new Date();
        const tick = {
            year: now.getFullYear(),
            month: now.getMonth(),
            day: now.getDate(),
            hours: now.getHours(),
            minutes: now.getMinutes(),
            sec: now.getSeconds(),
        };
        const newItem = this.createTaskItem(text, tick);
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

    onToggleImportant = (id) => {
        console.log("Important", id);
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
        const { taskData } = this.state;
        const tasksCount = this.state.taskData.filter((el) => !el.done).length;

        console.log(this.state);

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
                />
            </section>
        );
    }
}
