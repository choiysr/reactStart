import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import rootReducer from "./ch17Redux/modules";
import AppCh17 from "./AppCh17";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";


/** 리액트 컴포넌트에서 스토어를 사용할 수 있도록 App 컴포넌트를 react-redux에서 제공하는 Provider 컴포넌트로 감싸준다. 이 컴포넌트를 사용할 때에는
 * store를 props로 전달해주어야 한다. **/
const store = createStore(rootReducer,composeWithDevTools());
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <AppCh17/>
    </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
