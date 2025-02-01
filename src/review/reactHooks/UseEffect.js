import { useState, useEffect } from 'react';

function UseEffect() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prev) => prev + 1);
        }, 1000);

        return () => clearInterval(interval); // 컴포넌트가 제거될 때 정리(clean-up)
    }, []); // 의존성 배열이 빈 배열이면 컴포넌트가 처음 마운트될 때만 실행됨


    return <p>Timer: {seconds}secoonds</p>;
}

export default UseEffect;
