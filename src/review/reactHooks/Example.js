import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

function Example() {
    console.log("🔄 Example 컴포넌트 렌더링");

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    // useRef: 값이 변경되어도 렌더링되지 않음
    const renderCount = useRef(1);

    useEffect(() => {
        renderCount.current += 1;
    })

    // useMemo: count 값이 바뀔 때만 실행됨
    const squared = useMemo(() => {
        console.log("🔢 useMemo 실행 (계산 중...)");
        return count * count;
    }, [count]);

    // ✅ useCallback: 함수를 메모이제이션하여 불필요한 재생성을 막음
    const logText = useCallback(() => {
        console.log("📝 현재 입력된 텍스트:", text);
    }, [text]);

    return (
        <div style={{ padding: "20px", border: "1px solid gray" }}>
            <h2>🔄 렌더링 횟수: {renderCount.current}</h2>
            <p>🟢 count: {count}</p>
            <p>🟢 count² (useMemo 결과): {squared}</p>
            <p>🟡 입력값: {text}</p>

            <button onClick={() => setCount(count + 1)}>+1 증가</button>
            <button onClick={logText}>텍스트 출력</button>
            <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
    );
}

export default Example;
