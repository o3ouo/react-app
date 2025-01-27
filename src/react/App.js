import { useState } from 'react';
import Style from './component/Style';
import ListRendering from './component/ListRendering';
import Event from './component/Event';

export default function App() {

    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Welcome to App</h1>
            <Button />
            <hr />
            <Style />
            <hr />
            <ListRendering />
            <hr />
            <Event />
            <hr />
            <EventButton />
            <EventButton />
            <hr />
            <EventButtonProps count={count} onClick={handleClick} />
            <EventButtonProps count={count} onClick={handleClick} />

        </div>
    );
}

function Button() {
    return (
        <button>
            I'm a button
        </button>
    );
}

function EventButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            Clicked {count} times
        </button>
    );
}

function EventButtonProps({ count, onClick }) {
    return (
        <button onClick={onClick}>
            Clicked {count} times
        </button>
    );
}

