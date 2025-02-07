import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const plusButton = (id) => {
    dispatch({ type: "PLUS_COUNT", payload: { id } });
  };

  const minusButton = (id) => {
    dispatch({ type: "MINUS_COUNT", payload: { id } });
  }

  const remove = (id) => {
    dispatch({ type: "REMOVE", payload: { id } });
  };

  return (
    <div className="cart" style={{ flexBasis: "40%" }}>
      <h2>Cart</h2>
      <div>
        {
          cart.map(item => (
            <div key={item?.id}>
              <h3>{item?.name}</h3>
              <p>가격 : {item?.price}원</p>
              <p>수량 : {item?.count}</p>
              <button type="button" onClick={() => plusButton(item.id)}>+</button>
              <button type="button" onClick={() => minusButton(item.id)}>-</button>
              <button type="button" onClick={() => remove(item.id)}>삭제</button>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default Cart;
