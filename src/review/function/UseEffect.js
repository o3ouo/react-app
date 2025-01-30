import React, { useState, useEffect } from 'react'

function UseEffect() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval); // 컴포넌트가 사라질 때 정리
    }, []);

    return <p>경과 시간: {seconds}초</p>;
}

export default UseEffect;
