import { useState } from 'react';

function UseState() {
    const [count, setCount] = useState(0);

  return (
    <div>
        <p>현재 카운트: {count}</p>
        <button onClick={() => setCount(count + 1)}> + 1 Increase </button>
    </div>
  );
}

export default UseState;
