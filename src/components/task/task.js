import React, { Component } from "react";
import { formatDistanceToNow } from "date-fns";

import "./task.css";

export class Task extends Component {
    creationTimeItem(date) {
        console.log(date);
        const result = formatDistanceToNow(
            // new Date(new Date().getFullYear(date), new Date().getMonth(date), new Date().getDate(date), new Date().getHours(date), new Date().getMinutes(date), new Date().getSeconds(date)),
            new Date(24, 4, 29, 0, 0, 1),
            { includeSeconds: true }
        );
        setInterval(() => console.log(result), 3000);
        return result;
    }

    render() {
        const { id, description, created, done, edition, onDeleted, onToggleDone, onToggleImportant } = this.props;

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
                        <span className="created">created {this.creationTimeItem(created)}</span>
                    </label>
                    <button className="icon icon-edit" onClick={this.changeEdition}></button>
                    <button className="icon icon-destroy" onClick={onDeleted}></button>
                </div>
                <input type="text" className="edit" value={description}></input>
            </li>
        );
    }
}
