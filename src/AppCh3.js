import {Route, Routes} from "react-router-dom";
import About from "./ch13ReactRouter/About";
import Home from './ch13ReactRouter/Home';
import Profile from "./ch13ReactRouter/Profile";
import Article from "./ch13ReactRouter/Article";
import Articles from "./ch13ReactRouter/Articles";
import Layout from "./ch13ReactRouter/Layout";
import NotFound from "./ch13ReactRouter/NotFound";
import Login from "./ch13ReactRouter/Login";
import MyPage from "./ch13ReactRouter/MyPage";

const AppCh3 = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/about" element={<About/>}></Route>
                <Route path="/profile/:username" element={<Profile/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/mypage" element={<MyPage/>}></Route>

                <Route path="/articles" element={<Articles/>}>
                    <Route path=":id" element={<Article/>}></Route>
                </Route>
                <Route path="*" element={<NotFound/>}></Route>
            </Route>

        </Routes>
    );
}

export default AppCh3;