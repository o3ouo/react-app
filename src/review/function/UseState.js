import React, { useState } from 'react'

function UseState() {

    /***** count increate *****/
    const [count, setCount] = useState(0); // 상태 정의

    /***** list filter *****/
    let items = [
		{ id: 1, category: 'fruit', name: 'apple' },
		{ id: 2, category: 'vegetable', name: 'tomato' },
		{ id: 3, category: 'fruit', name: 'banana' },
		{ id: 4, category: 'vegetable', name: 'carrot' },
		{ id: 5, category: 'fruit', name: 'melon' },
	];
	
	const [select, setSelect] = useState('fruit'); // 초기값 fruit
	
	// 선택된 카테고리에 해당하는 데이터 필터링
	const filterItem = items.filter( item => item.category === select );

    /***** toggle button *****/
    const [on, setOn] = useState(false); // 초기값 false

    return(
        <div>
            <p>현재 카운트: {count}</p>
            <button onClick={() => setCount(count + 1)}> Increate </button>
            <hr />
            <h1> Fruit & Vegetable </h1>
			<button onClick={() => setSelect('fruit')}> Fruit </button>
			<button onClick={() => setSelect('vegetable')}> Vegetable </button>
			<ul>
				{
					filterItem.map( item => (
						<li key={item.id}>{item.name}</li>
					))
				}
			</ul>
            <hr />
            <button onClick={() => setOn(!on)}>{on ? "Off" : "On"}</button>
			<p>상태 : {on ? "On" : "Off"}</p>
        </div>
    );
}

export default UseState;