import {useCallback, useEffect, useState} from "react";

const Test = () => {

    const [number, setNumber] = useState(1);


    const parent = () => {
        const child = ()=> {
            setNumber(number + 1);
            setNumber(number + 1);
            console.log(number);
        };
        child();
        console.log("parent");
    }

    console.log("rerender");

    return (<div>
        <button onClick={parent}>zzz</button>
        {number}
    </div>);
}

export default Test;