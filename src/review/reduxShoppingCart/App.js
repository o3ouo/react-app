import React from 'react';
import ProductList from './component/ProductList';
import Cart from './component/Cart';

function App() {
  return (
    <div style={{ maxWidth: "1200px", margin: "100px auto", padding: "20px" }}>
      <h1>쇼핑몰 카트</h1>
      <div className="content" style={{ display: "flex", justifyContent: "space-between", gap: "24px" }}>
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
