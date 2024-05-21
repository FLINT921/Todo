import React from "react";

import AppHeader from "../app-header";
import AppMain from "../app-main";

import "./app.css";

export const App = () => {
    const taskData = [
        { id: 1, description: "Completed task", created: "created 17 seconds ago", state: true },
        { id: 2, description: "Editing task", created: "created 5 minutes ago", state: false },
        { id: 3, description: "Active task", created: "created 5 minutes ag", state: false },
    ];

    return (
        <section className="todoapp">
            <AppHeader />
            <AppMain tasks={taskData} />
        </section>
    );
};
