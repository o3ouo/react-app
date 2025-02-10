import React from 'react';
import { useProductQuery } from './hooks/useProd';

const RQuery = () => {
  const { data, isLoading, isError, error, refetch } = useProductQuery();

  console.log(data, isLoading);
  console.log("Error: ", isError, error);

  if (isLoading) return <h2>Loading...</h2>
  if (isError) return <h2>{error.massage}</h2>

  return (
    <div>
      {data?.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
      <button type="button" onClick={refetch}>상품 보기</button>
    </div>
  );
}

export default RQuery;