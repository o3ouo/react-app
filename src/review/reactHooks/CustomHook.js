import { useState, useEffect } from 'react';

function useCounter(initialValue = 0) {
    const [count, setCount] = useState(initialValue);

    useEffect(() => {
        console.log(`현재 카운트 ${count}`);
    }, [count]);

    return { count, setCount };
}

function CustomHook() {
    const { count, setCount } = useCounter(10);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}> + 1 Increase </button>
    </div>
  );
}

export default CustomHook;
