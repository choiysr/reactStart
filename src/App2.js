import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import {useCallback, useReducer, useRef} from "react";
import TodoList2 from "./components/TodoList2";

/*
 useReducer를 활용한 컴포넌트 성능 최적화
 */


function createBulkTodos() {
    const array = [];
    for (let i = 1; i <= 2500; i++) {
        array.push({
            id: i,
            text: `할 일 ${i}`,
            checked: false
        })
    }
    return array;
}


function todoReducer(todos, action) {
    switch(action.type) {
        case 'INSERT' :
            return todos.concat(action.todo);
        case 'DELETE' :
            return todos.filter(todo => todo.id !== action.id);
        case 'TOGGLE' :
            return todos.map(todo=>todo.id === action.id ? {...todo, checked : !todo.checked} : todo);
        default: return todos;
    }
}


const App2 = () => {
    const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
    const nextId = useRef(2501);

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        };
        dispatch({ type : 'INSERT', todo});
        nextId.current += 1;
    }, [])

    const onDelete = useCallback(id => {
        dispatch({ type : 'DELETE', id});
    }, [])

    const onToggle = useCallback(id => {
        dispatch({ type : 'TOGGLE', id});
    },[])

    return <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList2 todos={todos} onDelete={onDelete} onToggle={onToggle}/>
    </TodoTemplate>
}

export default App2;
