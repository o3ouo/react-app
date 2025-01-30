import React, { useState, useEffect } from 'react'

function Update() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`count가 변경됨: ${count}`);
    }, [count]); // count 값이 변경될 때마다 실행

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}> Increase </button>
        </div>
    );
}

export default Update;
