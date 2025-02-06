import React from "react";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
	const [searchParams, setSearchParams] = useSearchParams(); // 쿼리 스트링 가져오기

	// 현재 검색어, 카테고리, 정렬 방식 가져오기
	const search = searchParams.get("search") || "none"; // "search" 값 읽기
	const category = searchParams.get("category") || "전체"; // "category" 값 읽기
	const sort = searchParams.get("sort") || "기본"; // "sort" 값 읽기
	
	// 검색어 변경
	const updateSearch = () => {
		setSearchParams({ search: "bag", category, sort });
	};

	// 카테고리 변경
	const updateCategory = () => {
		setSearchParams({ search, category: "electronics", sort });
	};

	// 정렬 방식 변경
	const updateSort = () => {
		setSearchParams({ search, category, sort: "rating" });
	};

	return (
		<div>
			<h2>Search Page</h2>
			<p>Search Keyword: {search}</p>
      		<p>category: {category}</p>
     		<p>정렬 방식: {sort}</p>

			<button onClick={updateSearch}>가방 검색</button>
			<button onClick={updateCategory}>전자제품 카테고리</button>
			<button onClick={updateSort}>평점순 정렬</button>
		</div>
	);
}

export default SearchPage;