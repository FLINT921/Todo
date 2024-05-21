import React from "react";

import TaskList from "../task-list";
import Footer from "../footer";

import "./app-main.css";

export const AppMain = ({ tasks }) => {
    return (
        <section className="main">
            <TaskList tasks={tasks} />
            <Footer />
        </section>
    );
};
