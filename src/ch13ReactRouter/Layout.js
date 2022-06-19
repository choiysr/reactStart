import {Outlet, useNavigate} from "react-router-dom";

const Layout = () => {

    const navigate = useNavigate();

    return (<div>
        <header style={{background: 'lightgray', padding: 16, fontSize: 24}}>
            <button onClick={()=>{navigate(-1)}}>뒤로가기</button>
            <button onClick={()=>{navigate('/articles')}}>게시글 목록</button>
        </header>
            <Outlet/>
    </div>)
}
export default Layout;