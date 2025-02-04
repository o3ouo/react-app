import React, { useEffect, useState } from 'react';

function Async() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json = await response.json();
        setData(json); 
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Async API 데이터</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "loading..."}
    </div>
  );
}

export default Async;
