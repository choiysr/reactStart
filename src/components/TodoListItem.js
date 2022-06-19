import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline
} from "react-icons/md";
import cn from 'classnames';
import './TodoListItem.scss'
import React from 'react';

/*
 what is cn?
 classnames는 React library중 하나로, 조건부로 classname을 결합할 수 있는 자바스크립트 유틸리티.
 아래에서 쓰인 cn은, 조건식(두번째 인자인 checked)이 참일 경우, className으로 'checkbox'를 설정해 주겠다는 뜻,
 */
const TodoListItem = ({ todo, onDelete, onToggle }) => {
    const {id, text, checked} = todo;

    return (
        <div className="TodoListItem">
            <div className={cn('checkbox', {checked})} onClick={()=>{onToggle(id)}}>
                {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank />}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => {onDelete(id)}}>
                <MdRemoveCircleOutline/>
            </div>
        </div>
    );
}

export default React.memo(TodoListItem);