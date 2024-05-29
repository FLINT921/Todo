import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";

import "./task.css";

export class Task extends Component {
  creationTimeItem(date) {
    const createTime = new Date(date);
    const result = formatDistanceToNow(createTime, {
      includeSeconds: true,
    });
    return result;
  }

  render() {
    const {
      id,
      description,
      created,
      done,
      edition,
      onDeleted,
      onToggleDone,
      onToggleImportant,
    } = this.props;

    let classNames = "";
    if (done) {
      classNames += "completed";
    } else if (edition) {
      classNames += "editing";
    } else if (!done && !edition) {
      classNames = "";
    }
    return (
      <li key={id} className={classNames}>
        <div className="view">
          <input className="toggle" type="checkbox" onChange={onToggleDone} />
          <label>
            <span className="description">{description}</span>
            <span className="created">
              created {this.creationTimeItem(created)} ago
            </span>
          </label>
          <button
            className="icon icon-edit"
            onClick={this.changeEdition}
          ></button>
          <button className="icon icon-destroy" onClick={onDeleted}></button>
        </div>
        <input type="text" className="edit" value={description}></input>
      </li>
    );
  }
}
