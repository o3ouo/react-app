import { useState, useMemo } from 'react';

function UseMemo() {
    console.log("🔄 MemoExample 렌더링");

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const expensiveCalculation = (num) => {
        console.log("💡 복잡한 계산 실행...");
        return num * 2;
    }

    const memoizedValue = useMemo(() => {
        return expensiveCalculation(count);
    }, [count]); // count가 변경될 때만 재계산

    return (
        <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
            <h2>🔄 Memoized 값: {memoizedValue}</h2>
            <p>🟢 count: {count}</p>
            <p>🔢 count² (useMemo 결과): {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)}>+1 Increase</button>

            <p>✏️ 텍스트 입력: {text}</p>
            <input value={text} onChange={(e) => setText(e.target.value)} placeholder="입력해보세요" />
        </div>
    );
}

export default UseMemo;
