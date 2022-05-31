import {useMemo, useState} from "react";

const Hook_useMemo = () => {

    const getAverage = (list) => {
        if(list.length == 0) return 0;
        console.log("평균값 계산중...");
        const sum = list.reduce((a,b)=>a+b);
        return sum/list.length;
    }

    const [inputValue, setInputValue] = useState(0);
    const [numberList, setNumberList] = useState([]);

    const onClick = () => {
        // parseInt 하지 않으면 문자열로 처리됨.
        // const newList = numberList.concat(parseInt(inputValue))
        const newList = numberList.concat(inputValue);
        setNumberList(newList);
        setInputValue(0)
    }

    const avg = useMemo(()=> getAverage(numberList), [numberList])

    return (
        <div>
            <input type="number" value={inputValue} onChange={
                (e)=>{
                    setInputValue(parseInt(e.target.value))
                }
            }/>
            <button onClick={onClick}>등록</button>
            <ul>
                {numberList.map((value, index)=>(
                    <li key={index}>{value}</li>
                ))}
            </ul>

            <b>평균값 : </b> {avg}
        </div>
    );
}

export default Hook_useMemo;