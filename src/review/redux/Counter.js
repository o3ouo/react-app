import React from 'react';
import { useSelector, useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.count); // 상태 가져오기
  const dispatch = useDispatch(); // 액션 보내기

  return (
    <div>
      <h1>카운트: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
}

export default Counter;
