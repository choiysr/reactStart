import {useCallback, useMemo, useState, useRef} from "react";

const Hook_useRef = () => {

    const id = useRef(1);
    const setId = (n) => {
        id.current = n;
    }


    const getAverage = (list) => {
        if (list.length == 0) return 0;
        console.log("평균값 계산중...");
        const sum = list.reduce((a, b) => a + b);
        return sum / list.length;
    }

    const [inputValue, setInputValue] = useState('');
    const [numberList, setNumberList] = useState([]);
    const inputEl = useRef(null);

    const onChange = useCallback((e) => {
        setInputValue(e.target.value)
    }, []) // 컴포넌트가 처음 렌더링될 때만 함수 생성

    const onClick = useCallback(() => {
        const newList = numberList.concat(parseInt(inputValue))
        setNumberList(newList);
        setInputValue('');
        inputEl.current.focus();
    }, [numberList, inputValue]) // numberList 혹은 inputValue가 바뀌었을 때만 함수 생성

    const avg = useMemo(() => getAverage(numberList), [numberList])

    return (
        <div>
            <input value={inputValue} onChange={onChange} ref={inputEl}/>
            <button onClick={onClick}>등록</button>
            <ul>
                {numberList.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>

            <b>평균값 : </b> {avg}
        </div>
    );
}

export default Hook_useRef;