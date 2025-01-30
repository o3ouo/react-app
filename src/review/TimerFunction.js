import React from 'react'

function Timer() {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let interval; // 타이머 ID 저장할 변수

        if (isRunning) {
            interval = setInterval(() => {
                setCount((prevCount) => prevCount + 1);
            }, 1000);
        }

        return () => {
            clearInterval(interval); // 타이머 정리
        };
    }, [isRunning]); // isRunning이 바뀔 때 실행

    return (
        <div>
            <button onClick={() => setIsRunning(true)}>Stert</button>
            <button onClick={() => setIsRunning(false)}>Stop</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

function TimerFunction() {
    const [showTimer,, setShowTimer] = useState(true);

    return (
        <div>
            {showTimer && <Timer />}
            <button onClick={() => setShowTimer(!showTimer)}>
                {showTimer ? "타이머 숨기기" : "타이머 보이기"}
            </button>
        </div>
    );
}

export default TimerFunction;
