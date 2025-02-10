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

}