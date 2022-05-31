import './App.css';
import {useState} from "react";

function Hook_useState() {

    // useState기본 - Counter
    const [value, setValue] = useState(0);
    const plusValue = ()=>{setValue(value+1)};
    const minusValue = ()=>{setValue(value-1)};

    // useState - 여러 상태 관리
    const [name, setName] = useState("");
    const [nickName, setNickName] = useState("");
    const onChangeName = (event) => {
        setName(event.target.value);
    }
    const onChangeNickName = (event) => {
        setNickName(event.target.value);
    }


    return (
        <div>
            <p>useState기본 - Counter</p>
            <p>{value}</p>
            <button onClick={plusValue}>+1</button>
            <button onClick={minusValue}>-1</button>

            <hr/>

            <p>여러 상태 관리</p>
            <p>이름 : {name}</p> <input value={name} onChange={onChangeName}></input>
            <p>닉네임 : {nickName}</p> <input value={nickName} onChange={onChangeNickName}></input>

        </div>

    );
}

export default Hook_useState;
