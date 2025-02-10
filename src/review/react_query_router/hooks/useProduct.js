import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = (id) => {
  if (id) {
    return axios.get(`https://localhost:5000/products/${id}`);
  } else {
    return axios.get(`https://localhost:5000/products`);
  }
};

export const useProductQuery = (id) => {
  return useQuery({
    queryKey: ['products', id],
    queryFn: () => fetchProducts(id),
    select: (data) => data.data,
    gcTime: 15000,
    staleTime: 10000,
  });
}
