import React from "react";
import Task from "../Task/Task";

const TaskList = ({ tasks = [], onToggleDone, deleteItem, changeEditButton, changeEdition }) => {
    return (
        <ul className="todo-list">
            {tasks.map((task) => (
                <Task key={task.id} {...task} onToggleDone={onToggleDone} deleteItem={deleteItem} changeEditButton={changeEditButton} changeEdition={changeEdition} />
            ))}
        </ul>
    );
};

export default TaskList;
