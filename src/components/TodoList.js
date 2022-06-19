import TodoListItem from "./TodoListItem";
import './TodoList.scss';
import React from 'react';

const TodoList = ({ todos, onDelete, onToggle }) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onDelete={onDelete} onToggle={onToggle}/>
            ))}
        </div>
    )
}

export default React.memo(TodoList);