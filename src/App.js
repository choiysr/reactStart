import './App.css';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import {useCallback, useRef, useState} from "react";


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


const App = () => {

    const nextId = useRef(2501);

    /*
      useState()의 기본값에 함수를 넣어 주었다. 여기서 함수를 넣어주지 않고 createBulkTodos() 라고 함수를 '호출'하는 식으로 작성했다면,
      렌더링 될 때 마다 createBulkTodos()가 호출 되지만, 파라미터를 함수형태로 넣어주어 컴포넌트가 처음 렌더링 될 때만 실행되도록 한다.
      '호출'하는 식으로 작성하면 리렌더링 될 때마다 실행된다는건 이해했으나, 파라미터에 함수이름을 넣어줬다고 첫 렌더링 될때만 실행된다는 거는 이해가 잘 안된다.
      그냥 그러려니 하자.
     */
    const [todos, setTodos] = useState(createBulkTodos);
    // const [todos, setTodos] = useState('');

    /*
    // useState의 함수형 업데이트를 사용하지 않은 기존 코드
    const onInsert = useCallback( text => {
      const todo = {
        id : nextId.current,
        text,
        checked: false
      }
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos]);
   */

    const onInsert = useCallback(text => {
        const todo = {
            id: nextId.current,
            text,
            checked: false
        }
        setTodos(todos => todos.concat(todo));
        nextId.current += 1;
    }, [])

    /*
    // useState의 함수형 업데이트를 사용하지 않은 기존 코드
    const onDelete = useCallback(id => {
      setTodos(todos.filter(todo => todo.id!==id));
    },[todos]);
    */

    const onDelete = useCallback(id => {
        setTodos(todo => todo.filter(todo => todo.id !== id))
    }, [])


    /*
    // useState의 함수형 업데이트를 사용하지 않은 기존 코드
    const onToggle = useCallback(id => {
        // 대상 id와 동일한 id의 원소일 경우, 새로운 배열을 반환. 해당하는 id가 없을 경우 기존 배열을 그대로 사용.
        // {...todo, checked : !todo.checked} 이 부분이 이해가 안가는데... 전개연산자로 todo를 그대로 복사해주는것 까지는 이해가 됨.
        // checked : !todo.checked 는 뭐지?? 문법대로라면 checked라는 key값을 추가하고 그 value가 !todo.checked인 애를 '추가'하겠다는 문법 같은데;;

        // 깨달음...
        // !!!!!! >> {...todo, checked : !todo.checked}  이건 '배열'을 의미하는게 아니라 해당 객체를 의미함. (ex. id가 2인 그 원소 한개를 의미함)
        // 따라서 전개연산자로 checked가 아닌 다른 요소는 그대로 복사하고(id, text), checked값만 변경해주겠다.
        // 이게 전체 배열에 적용되는 사항이 아니라 해당 '원소'만 적용되는 것임.
        // 전체 배열이라면 문법이 {} 가 아니라 [] 겠지.

        setTodos(todos.map(todo =>
            todo.id === id ? {...todo, checked: !todo.checked} : todo
        ))
    }, [todos])
     */

    const onToggle = useCallback(id => {
        setTodos(todos => todos.map(todo => todo.id === id? {...todo, checked : !todo.checked} : todo))
    },[])

    return <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle}/>
    </TodoTemplate>
}

export default App;
