import {Link} from 'react-router-dom';

const Home = () => {

    return (<div>
        <h1>Home</h1>
        <p>가장 먼저 보이는 페이지</p>
        <ul>
            <li><Link to="/about">소개</Link></li>
            <li><Link to="/profile/sora">소라의 프로필</Link></li>
            <li><Link to="/profile/dooly">둘리의 프로필</Link></li>
            <li><Link to="/profile/void">존재하지 않는 프로필</Link></li>
            <li><Link to="/articles">게시글 목록</Link></li>
        </ul>
    </div>)
}

export default Home;