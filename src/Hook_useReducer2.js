import {useReducer} from "react";

// reducer 함수로 컴포넌트의 업데이트 로직을 분리했다.
const reducer = (state, action) => {
    return {
        ...state,
        [action.name] : action.value
    };
}

const Hook_useReducer2 = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickName: ''
    });
    const {name, nickName} = state;
    const onChange = event => {
        dispatch(event.target);
    }

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickName" value={nickName} onChange={onChange}/>
            </div>
            <div>
                <b>이름 : </b>{name}
                <b>닉네임 : </b>{nickName}
            </div>
        </div>);
}

export default Hook_useReducer2