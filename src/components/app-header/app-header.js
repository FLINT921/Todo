import React from "react";

import "./app-header.css";
import NewTaskForm from "../new-task-form";

export const AppHeader = () => {
    return (
        <div className="header">
            <h1>todos</h1>
            <NewTaskForm />
        </div>
    );
};
