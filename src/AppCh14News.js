import NewsPage from "./ch14NewViewerProject/pages/NewsPage";
import {Route, Routes} from "react-router-dom";

const AppCh14News = () => {

    return (
        <Routes>
            <Route index element={<NewsPage />} />
            <Route path="/:category" element={<NewsPage/>}/>
        </Routes>
    )
}

export default AppCh14News;