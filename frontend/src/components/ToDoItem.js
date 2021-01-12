import React from "react"

function ToDoItem(props) {
    return (
        <div className="todoitem">
            <input type="checkbox"
                checked={props.task.completed}
                onChange={() => props.handleChange(props.task.id)}
            />

            {
                props.task.completed ?
                    <label className="completedTask">{props.task.label}</label> :
                    <label className="incompleteTask">{props.task.label}</label>
            }
        </div>
    )
}

export default ToDoItem