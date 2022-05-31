import {useEffect, useState} from "react";

function Hook_useEffect() {

    const [name, setName] = useState('');
    const [nickName, setNickName] = useState('');

    /*
    useEffect(() => {
        console.log("렌더링 될때마다 실행됩니다.")
    })
     */

    /*
    useEffect(() => {
        console.log("마운트될 때만 실행됩니다.")
    },[])
     */

    useEffect(()=>{
        console.log("name과 nickName이 변경될 때만 실행됩니다. name :: "+name+', nickName :: '+nickName);
    },[name,nickName])

    /*
    useEffect(()=>{
        console.log('name값이 변경될 때만 실행됩니다. name :: '+name);
        return () => {
            console.log('cleanup 함수입니다. 컴포넌트가 언마운트되기 직전이나 업데이트되기 직전에 수행됩니다.'+name);
        }
    })
     */

    return (
        <div>
            <p>이름 : {name}</p>
            <input value={name} onChange={(event)=>{
                setName(event.target.value)
            }}></input>

            <p>닉네임 : {nickName}</p>
            <input value={nickName} onChange={(event)=>{setNickName(event.target.value)}}></input>
        </div>
    );
}

export default Hook_useEffect