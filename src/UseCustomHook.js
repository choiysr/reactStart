import useInputs from "./useInputs";

const UseCustomHook = () => {

    const [state, onChange] = useInputs({
        'name' : '',
        'nickName' : '',
        'age' : '',
        'gender' : ''
    })

    const {name, nickName, age, gender} = state;

    return (
        <div>
            <b>name : </b>{name}
            <br/>
            <b>nickName : </b>{nickName}
            <br/>
            <b>age : </b>{age}
            <br/>
            <b>gender : </b>{gender}
            <br/>
            <b>name ---- </b><input name='name' value={name} onChange={onChange}></input><br/>
            <b>nickName ---- </b><input name='nickName' value={nickName} onChange={onChange}></input><br/>
            <b>age ---- </b><input name='age' value={age} onChange={onChange}></input><br/>
            <b>gender ---- </b><input name='gender' value={gender} onChange={onChange}></input><br/>
        </div>
    );

}

export default UseCustomHook