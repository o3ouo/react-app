import React, { useEffect, useState } from 'react';
import axios from 'axios';

function API() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts/1")
        setData(response.data);
      } catch (error) {
        setError(error.massage);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [])

  if (loading) return <p>loading...</p>;
  if (error) return <p>error!</p>;

  return (
    <div>
      <h1>API 데이터</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default API;
