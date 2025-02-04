import React from "react";
import { useSearchParams } from "react-router-dom";

function SearchPage() {
	const [searchParams] = useSearchParams(); // 쿼리 스트링 가져오기
	const keyword = searchParams.get("keyword"); // "keyword" 값 읽기
	const page = searchParams.get("page"); // "page" 값 읽기
	
	return (
		<div>
			<h2>Search Page</h2>
			<p>Search: {keyword}</p>
			<p>Page: {page}</p>
		</div>
	);
}

export default SearchPage;