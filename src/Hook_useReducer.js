import {useReducer} from "react";

function reducer (state, action) {
    console.log("reduce!")
    switch (action.type) {
        case 1 : return { value : state.value+1};
        case 2 : return { value : state.value-1};
        default: return state;
    }
}

const Hook_useReducer = () => {
    const [state, dispatch] = useReducer(reducer, {value : 0});

    return(
        <div>
        <p>현재 카운터 값은 {state.value} 입니다.</p>
            <button onClick={ () => dispatch( { type: 1 } ) }>+1</button>
            <button onClick={ () => dispatch( { type: 2 } ) }>-1</button>
        </div>
    );
}

export default Hook_useReducer

