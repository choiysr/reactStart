import {useLocation} from "react-router-dom";
import {useSearchParams} from "react-router-dom";

const About = () => {

    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();
    const detail = searchParams.get('detail');
    const mode = searchParams.get('mode');

    const onToggleDetail = () => {
        console.log("toggle mode :: "  + mode);
        setSearchParams({mode, detail: detail === 'true' ? false : true});
    }

    const onIncreaseMode = ()=> {
        /* mode가 세팅되지 않은 상태에서 onToggledetail을 먼저 실행하면,
        onToggledetail의 setSearchParams에 의해 mode는 'null'이라는 문자열로 초기화 됨.
        따라서 (mode === 'null' || mode === null) 두가지 경우를 체크해줘야함.
        */
        const nextMode = (mode === 'null' || mode === null) ? '1' : parseInt(mode) + 1;
        setSearchParams({mode : nextMode, detail});
    }

    return(<div>
        <h1>소개</h1>
        <p>리액트 라우터를 사용해 보는 프로젝트 입니다.</p>
        <p>useLocation Hook으로 쿼리스트링을 문자열로 확인 할 수 있음 : {location.search}</p>
        <p>detail : {detail}</p>
        <p>mode : {mode}</p>
        <button onClick={onToggleDetail}>Toggle detail</button>
        <button onClick={onIncreaseMode}>mode + 1</button>
    </div>)
}

export default About;