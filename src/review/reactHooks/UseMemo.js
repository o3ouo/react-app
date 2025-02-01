import { useState, useMemo } from 'react';

function UseMemo({ number }) {
    const slowFunction = (num) => {
        console.log("복잡한 계산 중...");
        return num ** 2;
    };

    const squaredNumber = useMemo(() => slowFunction(number), [number]);

  return (
    <div>
        <p>Result: {squaredNumber}</p>
    </div>
  )
}

export default UseMemo;
