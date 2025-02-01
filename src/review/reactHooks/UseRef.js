import { useRef, useEffect, useState } from 'react';

function UseRef() {
    const inputRef = useRef(null); // 초기값은 null

    useEffect(() => {
        inputRef.current.focus(); // 컴포넌트가 마운트되면 input에 포커스
    }, []);

    const click = useRef(0); // 렌더링 되지 않는 값
    const [count, setCount] = useState(0);

    const onClick = () => {
        setCount(count + 1);
        click.current += 1;
        console.log('click.current: ' + click.current)
    }

    return (
        <div>
            <input type="text" ref={inputRef} />

            <h2>Count: {count} </h2>
            <button onClick={onClick}>Click</button>
        </div>
    );
}

export default UseRef;
