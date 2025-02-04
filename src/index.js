import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import App from './react/App';
// import Object from './review/Object';
// import Class from './review/Class';
// import Function from './review/function/Function';
// import UseState from './review/function/UseState';
// import UseEffect from './review/function/UseEffect';
// import Spread from './review/Spread';
// import Menu from './review/Menu';
// import App from './review/geme/App';
// import LifeCycleExample from './review/lifecycleClass/LifeCycleExample';
// import MyComponent from './review/lifecycleClass/Mount';
// import MyComponent from './review/lifecycleClass/Update';
// import MyComponent from './review/lifecycleClass/Unmount';
// import TimerClass from './review/TimerClass';
// import Mount from './review/lifecycleFuntion/Mount';
// import Update from './review/lifecycleFuntion/Update';
// import Unmount from './review/lifecycleFuntion/Unmount';
// import UseState from './review/reactHooks/UseState';
// import UseEffect from './review/reactHooks/UseEffect';
// import UseRef from './review/reactHooks/UseRef';
// import UseMemo from './review/reactHooks/UseMemo';
// import UseCallback from './review/reactHooks/UseCallback';
// import CustomHook from './review/reactHooks/CustomHook';
// import Example from './review/reactHooks/Example';
// import Fetch from './review/api/Fetch';
// import Async from './review/api/Async';
// import Axios from './review/api/Axios';
// import API from './review/api/API';
// import App from './review/router/App';
import SearchPage from './review/SearchPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SearchPage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
