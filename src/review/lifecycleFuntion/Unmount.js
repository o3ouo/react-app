import React, { useState, useEffect } from 'react'

function Timer() {
    useEffect(() => {
        const interval = setInterval(() => {
            console.log("1초마다 실행됨");
        }, 1000);

        return () => {
            clearInterval(interval); // 언마운트 시 타이머 제거
            console.log("타이머 정리됨");
        };
    }, []);

    return <div>타이머 실행 중 ~</div>;
}

function Unmount() {
    const [showTimer, setShowTimer] = useState(true);

    return (
        <div>
            {showTimer && <Timer />}
            <button onClick={() => setShowTimer(false)}>타이머 제거</button>
        </div>
    );
}

export default Unmount;
