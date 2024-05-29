import React, { Component } from "react";

import "./tasks-filter.css";

export class TasksFilter extends Component {
  render() {
    const { onFilterAll, onFilterActive, onFilterCompleted } = this.props;

    return (
      <ul className="filters">
        <li>
          <button onClick={onFilterAll} className="{activeButton}">
            All
          </button>
        </li>
        <li>
          <button onClick={onFilterActive} className="">
            Active
          </button>
        </li>
        <li>
          <button onClick={onFilterCompleted} className="">
            Completed
          </button>
        </li>
      </ul>
    );
  }
}
