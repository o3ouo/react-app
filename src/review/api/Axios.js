import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axios() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
       <h1>Axios API 데이터</h1>
       {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "로딩 중..."}
    </div>
  );
}

export default Axios;
