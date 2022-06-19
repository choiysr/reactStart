import {Navigate} from 'react-router-dom'

const MyPage = () => {

    const isLoggedIn = false;

    if (!isLoggedIn) {
        return <Navigate to="/login" replace={true}/>;
    }
    return (<div><h1>마이페이지</h1></div>)
}

export default MyPage;