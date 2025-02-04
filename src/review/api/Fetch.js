import React, { useEffect, useState } from 'react';

function Fetch() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1") // API URL
      .then((response) => response.json()) // JSON으로 변환
      .then((json) => setData(json)) // 상태 업데이트
      .catch((error) => console.error("Error:", error)); // 에러 처리
  }, []); // 컴포넌트 마운트 시 실행

  return (
    <div>
      <h1>Fetch API 데이터</h1>
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "loading..."}
    </div>
  );
}

export default Fetch;
