import React, { useState } from 'react';

function Menu() {

    // 1. 메뉴 데이터 상태 (useState) 생성
    const [menu, setMenu] = useState([
        { id: 1, name: "햄버거", price: 5000, quantity: 0 },
        { id: 2, name: "피자", price: 12000, quantity: 0 },
        { id: 3, name: "콜라", price: 2000, quantity: 0 },
    ]);

    // 2. 수량 증가 함수
    const increaseQuantity = (id) => {
        setMenu(menu.map(item =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // 3. 수량 감소 함수
    const decreaseQuantity = (id) => {
        setMenu(menu.map(item =>
            item.id === id && item.quantity > 0 ? { ...item, quantity: -1 } : item
        ));
    };

    // 4. 총 금액 계산 함수
    const totalPrice = menu.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div style={{ padding: "20px"}}>
            <h1>📜 Menu</h1>
            <ul>
                {menu.map((item => (
                    <li key={item.id} style={{ marginBottom: "10px" }}>
                        <span>
                            {item.name} - {item.price.toLocaleString()}￦
                        </span>
                        <button onClick={() => decreaseQuantity(item.id)}> - </button>
                        <span style={{ margin: "0 10px" }}>{item.quantity}</span>
                        <button onClick={() => increaseQuantity(item.id)}> + </button>
                    </li>
                )))}
            </ul>

            {/* 선택한 메뉴 표시 */}
            <h2>🛒 선택한 메뉴</h2>
            <ul>
                {menu
                    .filter((item) => item.quantity > 0)
                    .map((item) => (
                        <li key={item.id}>
                            {item.name} x {item.quantity} = {(item.price * item.quantity).toLocaleString()}￦
                        </li>
                    ))}
            </ul>

            {/* 총 금액 표시 */}
            <h2>💰 총 금액: {totalPrice.toLocaleString()}원</h2>
        </div>
    );
}

export default Menu;
