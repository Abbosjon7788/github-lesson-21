import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductPage from "./components/ProductPage";
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "lightgallery.js/dist/css/lightgallery.css";
import 'react-modal-video/css/modal-video.min.css';

import Wrap from "./components/Wrap";
import Trello from "./components/Trello";
import LifeCycleMethods from "./components/LifeCycleMethods";
import Employee from "./components/Employee";

ReactDOM.render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
