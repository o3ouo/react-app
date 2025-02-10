import React, { useEffect, useState } from 'react';

const Nomal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchProduct = async () => {
    setIsLoading(true);
    const url = "https://localhost:5000/products";
    const response = await fetch(url);
    const data = response.json();
    setIsLoading(false);
    setData(data);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  if (isLoading) return <h2>Loading...</h2>

  return (
    <div>
      {data?.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default Nomal;