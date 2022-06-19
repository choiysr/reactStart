import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from "react-icons/md";
import cn from 'classnames';
import './TodoListItem2.scss'
import React from 'react';

const TodoListItem2 = ({todo, onDelete, onToggle, style}) => {
    const {id, text, checked} = todo;

    return (
        <div className="TodoListItem2-virtualized" style={style}>
            <div className="TodoListItem2">
                <div className={cn('checkbox', {checked})} onClick={() => {
                    onToggle(id)
                }}>
                    {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
                    <div className="text">{text}</div>
                </div>
                <div className="remove" onClick={() => {
                    onDelete(id)
                }}>
                    <MdRemoveCircleOutline/>
                </div>
            </div>
        </div>
    );
}

export default React.memo(TodoListItem2);