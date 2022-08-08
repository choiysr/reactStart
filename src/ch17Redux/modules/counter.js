/**
 * 액션 타입 정의부
 * - 액션 타입은 대문자로 정의하고 문자열 내용은 '모듈 이름/액션 이름'형태로 작성한다.
 * - 문자열 안에 모듈 이름을 넣음으로써 액션 이름의 충돌을 방지한다.
 * */

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

/**
 * 액션 생성 함수 정의부
 * export 키워드를 붙여주어 다른 파일에서 이 함수를 불러와 사용할 수 있게 한다.
 * */
export const increase = () => ({type : INCREASE});
export const decrease = () => ({type : DECREASE});

/**
 * 초기 상태 및 리듀서 함수 정의부
 * 초기 상태에 number 값을 설정해 주고, 리듀서 함수에는 현재 상태를 참조하여 새로운 객체를 생성해 반환하는 코드를 작성한다.
 * export default 키워드와 export 키워드의 차이점은 export는 여러개를 내보낼 수 있지만, export default는 단 한개만 내보낼 수 있다.
 * 또한 불러오는(import) 방식에도 차이가 있다.
 * e.g ) import counter, { increase, decrease } from './counter';
 * */
const initialState = {
    number : 0
};

function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE: return { number : state.number + 1 };
        case DECREASE: return { number : state.number - 1 };
        default: return state;
    }
}

export default counter;
