import {useParams} from "react-router-dom";
import Categories from "../conponents/Categories";
import NewsList2 from "../conponents/NewsList2";

const NewsPage = () => {

    const params = useParams();
    // 카테고리가 선택되지 않았으면 기본값으로 all 사용
    const category = params.category || 'all';
    return (<>
        <Categories/>
        <NewsList2 category={category}/>
    </>);

};

export default NewsPage;