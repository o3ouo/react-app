import React, { useState } from 'react';
import { useProductQuery } from './hooks/useProduct';
import { Link, useSearchParams } from 'react-router-dom';

const List = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || "";
  const [searchInput, setSearchInput] = useState(searchQuery);
  console.log(searchInput);

  const { data, isLoading, isError, error } = useProductQuery();

  const onSearch = (e) => {
    e.prevenDefault();
    setSearchParams({ search: searchInput });
    setSearchInput("");
  };

  const filterData = data?.filter((product) => product.title.includes(searchQuery));

  if (isLoading) return <h2>Loading...</h2>
  if (isError) return <h2>{error.message}</h2>

  return (
    <div>
      <h1>All Item</h1>

      <form onSubmit={onSearch}>
        <input 
          type="text" 
          placeholder="Item Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          />
      </form>

      <div>
        {filterData.map(item => (
          <div key={item.id}>
            <Link to={`/products/${item.id}`}>
              <img src={item.img} alt={item.title} />
              <h3>{item.title}</h3>
              <h4>{item.price}￦</h4>
            </Link>
          </div>
        ))
        }
      </div>
    </div>
  );

}

export default List;