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
// import { BrowserRouter } from 'react-router-dom';
// import SearchPage from './review/SearchPage';
// import { Provider } from "react-redux";
// import store from "./review/redux/store/store";
// import App from "./review/redux/App";
// import store from "./review/reduxShoppingCart/store/store";
// import App from "./review/reduxShoppingCart/App";
// import store from "./review/createAsynThunk/store/store";
// import App from './review/createAsynThunk/App';
// import App from './review/reactQueryServer/App';
import App from './review/react_query_router/App';
import { QueryClient, QueryClientProvider } from "tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
// React Query 클라이언트 생성
const queryClient = new QueryClient();
root.render(

  // 두 번씩 실행함 (test)
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // Router 사용
  // <BrowserRouter>
  //   <SearchPage />
  // </BrowserRouter>

  // Redux store 사용
  // <Provider store={store}>
  //   <App />
  // </Provider>

  // React Query, Router 사용
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false} buttonPosition='bottom-right' />
  </QueryClientProvider>

  
);

reportWebVitals();
