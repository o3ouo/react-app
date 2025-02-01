import { useState, useCallback } from 'react';

function UseCallback() {
    console.log("🔄 CallbackExample 렌더링");

    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    const handleClick = useCallback(() => {
        console.log(`🖱️ 클릭! count: ${count}`);
    }, [count]); // count가 변경될 때만 새 함수 생성

    return (
        <div style={{ border: "1px solid green", padding: "10px", marginBottom: "10px" }}>
            <h2>🔄 useCallback 사용 예제</h2>
            <p>🟢 count: {count}</p>
            <button onClick={() => setCount(count + 1)}> + 1 Increase </button>
            <button onClick={handleClick}> 📌 Callback 버튼 </button>

            <p>✏️ 텍스트 입력: {text}</p>
            <input type="text" onChange={(e) => setText(e.target.value)} />
        </div>
    );
}

export default UseCallback;
