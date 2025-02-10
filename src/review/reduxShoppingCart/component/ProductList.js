import React from 'react';
import { useDispatch } from 'react-redux';

function ProductList() {
  const dispatch = useDispatch();

  const products = [
    { id: 1, name: "땅땅치킨 Set 1번", price: "25,000" },
    { id: 2, name: "불닭 콘치즈 소세지 김밥", price: "3,200" },
    { id: 3, name: "카레라이스", price: "10,000" },
  ];

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  }

  return (
    <div className="product" style={{ flexBasis: "60%" }}>
      <h2>Like Food List</h2>
      <ul className="list">
        {
          products.map(product => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>price: {product.price}￦</p>
              <button type="button" onClick={() => addToCart(product)}>Add Cart</button>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default ProductList;
