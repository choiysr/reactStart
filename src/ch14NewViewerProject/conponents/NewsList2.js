/**
 * api key : b94ae4a26b1540389e2c4db18efe6b1f
 */

import styled from "styled-components";
import NewsItem from "./NewsItem";
import {useEffect, useState} from "react";
import axios from "axios";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList2 = ({category}) => {

    const [articles, setArticles] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        console.log("useeffect")
        // async를 사용하는 함수 선언
        const fetchData = async () => {

            console.log(" ::: (4) fetchData가 호출됨. fetchData 함수 내부 ::: ");
            setLoading(true);  // loading 상태
            console.log(" ::: (5) loading 상태 true로 set완료 ! ::: ");
            try {
                const query = category === 'all' ? '' : `&category=${category}`;
                const response = await axios.get(
                    `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=b94ae4a26b1540389e2c4db18efe6b1f`
                );
                console.log(" ::: (6) response를 받아오고 setArticles를 해주기 직전 ::: ");
                setArticles(response.data.articles);
                console.log(" ::: (7) article set완료 !");
            } catch (e) {
                console.log(e);
            }
            console.log(" ::: (8) loading 상태 false로 set직전 ! ::: ");
            setLoading(false); // loading 끝난 상태
        }
        console.log(" ::: (3) fetchData 호출 직전 ::: ");
        fetchData();
        console.log("fecthData를 호출한 이후. useEffect 함수의 내부");
    }, [category]);

    // loading 상태일때
    console.log(" ::: (1) loading상태 파악 ::: ");
    if (loading) {
        return <NewsListBlock>대기 중...</NewsListBlock>
    }

    // 아직 articles 값이 설정되지 않았을 때
    console.log(" ::: (2) articles 설정여부 파악 ::: ");
    if (!articles) {
        return null;
    }

    // articles 값이 유효할 때
    return (<NewsListBlock>
            {
                articles.map(article => (<NewsItem key={article.url} article={article}/>))
            }
        </NewsListBlock>
    );
};

export default NewsList2;
