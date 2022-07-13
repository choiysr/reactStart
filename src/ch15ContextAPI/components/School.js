import StudentContext from "../contexts/student";
import {useState} from "react";

const School = props => {

    return (
        /**
        * <Context.Consumer>에 어떤 의미를 두기보다는, 그냥 Context값을 조회할 수 있는 영역(context)을 정의해준다고 생각하자.
        * 결국 return 은 Html(jsx)가 되어야하고, 내부에 value => () 도 결국 html(jsx)을 return 하고 있는 형태임. 이렇게 생각하면 안어려움.
        * */

        /**
         * 동적 context api를 활용해야 하는 이유는, 정적으로 아래와같이 provider를 사용할 경우, 결국 어떠한 한 컴포넌트에 값을 의지하는 수 밖엔 없음.
         * 이 예제는 부모컴포넌트의 props에 의지하고 있음. 그러나 이 컴포넌트 내부에서 state를 정의하고 setter를 사용할수도 있음.
         * (state로 관리 안하면 렌더링 문제 발생)
         * useState를 이용하면 결국 나중에 context의 값을 변경해야하는 컴포넌트들이 많아질경우 다시 각각의 컴포넌트에서 useState를 정의해줘야함.
         * 따라서 책의 예제와 같이 context의 내부에 setter함수를 정의해두는 것이 효율적인 방법.
         */
        <StudentContext.Provider value={props.students}>
            <StudentContext.Consumer>
                {
                    value => (
                        <div>
                            <h1>{value[0].name}</h1>
                            <h1>{value[1].name}</h1>
                        </div>
                    )
                }
            </StudentContext.Consumer>
        </StudentContext.Provider>
    )
}

export default School;
