import { useRef, useEffect, useState } from 'react';

function UseRef() {
    console.log("🔄 RefExample 렌더링")

    const [count, setCount] = useState(0);
    const renderCount = useRef(0); // 렌더링 횟수 저장 (렌더링이 되어도 초기화되지 않음)

    const inputRef = useRef(null); // 초기값은 null

    // useEffect를 사용하여 첫 번째 렌더링 후에만 renderCount 증가
    useEffect(() => {
        //useRef 값은 렌더링될 때마다 증가하지만, 렌더링을 유발하지 않음 
        renderCount.current += 1;

        inputRef.current.focus(); // 컴포넌트가 마운트되면 input에 포커스
    }, []);

    return (
        <div style={{ border: "1px solid gray", padding: "10px", marginBottom: "10px" }}>
            <input type="text" ref={inputRef} />

            <h2>🔄 렌더링 횟수: {renderCount.current}</h2>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}> + 1 Icrease</button>

        </div>
    );
}

export default UseRef;
