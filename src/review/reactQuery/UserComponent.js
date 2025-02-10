import { useQuery } from "@tanstack/react-query";

const fetchUser = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return response.json();
};

const UserComponent = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"], // 캐싱할 때 사용되는 키
    queryFn: fetchUser, // 데이터를 가져오는 함수
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.massage}</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
};

export default UserComponent;