import {useEffect, useState} from "react";

const Todolist_first = () => {

    const [jobInput, setJobInput] = useState('');
    const [listIndex, setListIndex] = useState(1);
    const [todoList, setTodoList] = useState([]);

    const onInputChange = (e) => {
        setJobInput(e.target.value);
    };

    const onAddBtnClick = () => {

        if(isEmpty(jobInput)) {
            alert('할 일을 입력하세요.');
        } else if (isAvailable(jobInput)) {
            const newItem = {
                'id': listIndex,
                'isCompleted': false,
                'job': jobInput
            }
            const newArray = [...todoList, newItem];
            setTodoList(newArray);
            setListIndex(listIndex + 1);
        } else {
            alert('이미 있다능');
        }
        setJobInput('');
    };

    const isAvailable = (jobStr) => {
        return !todoList.filter(item => item.job == jobStr).length > 0;
    }

    const isEmpty = (jobStr) => {
        return jobStr=='';
    }

    const onCheckBoxChange = (jobId) => {
        const newList = [...todoList];
        newList.forEach(item => {
            if (item.id == jobId) {
                item.isCompleted = !item.isCompleted;
            }
        })
        setTodoList(newList);
    }


    const onDeleteBtnClick = (jobId) => {
        setTodoList(todoList.filter(item => item.id != jobId));
    }

    return (
        <div>
            <div>일정 관리</div>
            <div>
                <input type='text' placeholder='할 일을 입력하세요' onChange={onInputChange} value={jobInput}/>
                <button onClick={onAddBtnClick}>+</button>
            </div>
            <div>
                {todoList.map(item => (<div key={item.id}>
                    <input type='checkbox'
                           checked={item.isCompleted}
                           key={item.id}
                           onChange={() => {
                               onCheckBoxChange(item.id)
                           }}/>
                    <b>{item.job}</b>
                    <button onClick={() => {
                        onDeleteBtnClick(item.id)
                    }}>x</button>
                </div>))}
            </div>
        </div>
    );

}

export default Todolist_first;