import React, { Component } from "react";

import "./tasks-filter.css";

export class TasksFilter extends Component {
    render() {
        return (
            <ul className="filters">
                <li>
                    <button onClick={() => console.log("1")} className="selected">
                        All
                    </button>
                </li>
                <li>
                    <button onClick={() => console.log("2")}>Active</button>
                </li>
                <li>
                    <button onClick={() => console.log("3")}>Completed</button>
                </li>
            </ul>
        );
    }
}
