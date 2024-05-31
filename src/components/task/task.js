import React, { Component } from "react";
import PropTypes from "prop-types";
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
    state = {
        description: "",
    };
    onTextChange = (e) => {
        this.setState({
            description: e.target.value,
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.description.length !== 0) this.props.changeEdition(this.state.description);
        this.setState({
            description: "",
        });
    };

    render() {
        const { id, description, created, done, edition, onDeleted, changeEditButton, onToggleDone } = this.props;

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
                        <span className="created">created {this.creationTimeItem(created)} ago</span>
                    </label>
                    <button className="icon icon-edit" onClick={changeEditButton}></button>
                    <button className="icon icon-destroy" onClick={onDeleted}></button>
                </div>
                <form onSubmit={this.onSubmit}>
                    <input className="edit" placeholder={description} onChange={this.onTextChange} autoFocus />
                </form>
            </li>
        );
    }
    static propTypes = {
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        description: PropTypes.string.isRequired,
        created: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]).isRequired,
        done: PropTypes.bool.isRequired,
        edition: PropTypes.bool.isRequired,
        onDeleted: PropTypes.func.isRequired,
        onToggleDone: PropTypes.func.isRequired,
        changeEditButton: PropTypes.func.isRequired,
        changeEdition: PropTypes.func.isRequired,
    };
}

Task.defaultProps = {
    id: 0,
    description: "",
    done: false,
    edition: false,
    onDeleted: () => {},
    onToggleDone: () => {},
};
