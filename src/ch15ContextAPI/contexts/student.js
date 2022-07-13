import {createContext} from "react";

const StudentContext = createContext([
    {
        name : '홍길동',
        age : 12
    },{
        name : '최예소라',
        age : 28
    }
])

export default StudentContext;