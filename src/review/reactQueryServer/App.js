import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import RQuery from './RQuery';
import Nomal from './Nomal';

const App = () => {
  return (
    <div>
      <h2>React Query</h2>
      <p>: 서버 상태를 효율적으로 관리하기 위한 라이브러리</p>

      {/* 네비게이션 메뉴 */}
      <Link to="/" >Home</Link>
      <Link to="/query" >React Query</Link>
      <Link to="/nomal" >Nomal</Link>

      {/* 라우터 설정 */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/query" element={<RQuery />} />
        <Route path="/nomal" element={<Nomal />}/>
      </Routes>
    </div>
  );
}

export default App;