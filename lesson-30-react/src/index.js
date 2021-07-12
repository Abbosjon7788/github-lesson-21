import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components_1/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'react-toastify/dist/ReactToastify.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "lightgallery.js/dist/css/lightgallery.css";
import 'react-modal-video/css/modal-video.min.css'


import App2 from "./components_2/App2";
import App3 from "./components_3/App3";
import Trello from "./trello/Trello";
import CreditCardCalculator from "./credit_calculator/CreditCardCalculator";
import ExtraLearning from "./extra-learning/ExtraLearning";
import App from './learning_router/App';
import {createStore} from "redux";
import {Provider} from "react-redux";
import {rootReducer} from "./Reducers/rootReducer";

const store = createStore(rootReducer);



ReactDOM.render(
    <Provider store={store}>
        {/*<App/>*/}
        {/*<App2/>*/}
        {/*<App3/>*/}
        {/*<Trello/>*/}
        {/*<CreditCardCalculator/>*/}
        {/*<ExtraLearning/>*/}
        <App/>

    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
