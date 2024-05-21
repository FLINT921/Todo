import React, { Component } from "react";

import "./task.css";

export class Task extends Component {
    handleCheckboxChange = (state) => {
        state = true;
        this.states = state;
        console.log(state);
    };

    render() {
        const { id, state, description, created } = this.props;

        let classNames = state;

        return (
            <li key={id} className={classNames}>
                <div className="view">
                    <input className="toggle" type="checkbox" onChange={() => this.handleCheckboxChange()} />
                    <label>
                        <span className="description">{description}</span>
                        <span className="created">{created}</span>
                    </label>
                    <button className="icon icon-edit"></button>
                    <button className="icon icon-destroy"></button>
                </div>
            </li>
        );
    }
}
