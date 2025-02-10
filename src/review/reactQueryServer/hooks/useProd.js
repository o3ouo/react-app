import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchProduct = () => {
  return axios.get(`http://localhost:5000/products`);
}

export const useProductQuery = () => {
  return useQuery({
    queryKey: ['products', 1],
    queryFn: fetchProduct,
    retry: 1, // 요청 실패 시 1번 재시도
    select: (data) => data.data, // 응답에서 'data'만 추출
    refetchOnMount: false, // 마운트될 때 자동으로 데이터 다시 불러오지 않음
    enabled: false, // 기본적으로 비활성화, 사용자가 요청할 때 실행
  });
}