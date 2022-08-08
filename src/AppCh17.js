import Counter from "./ch17Redux/components/Counter";
import Todos from "./ch17Redux/modules/todos";

const AppCh17 = () => {
    return (
        <div>
            <Counter number={0}/>
            <hr />
            <Todos/>
        </div>
    );
}

export default AppCh17;