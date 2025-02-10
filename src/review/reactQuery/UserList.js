import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

// 유저 리스트 가져오기
const fetchUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json();
};

// 유저 추가하기
const addUser = async (newUser) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });
  return response.json();
};

const UserList = () => {
  const QueryClient = useQueryClient(); // 캐시를 조작할 수 있는 객체
  const { data: users, isLoading } = useQuery({ queryKey: ["user"], queryFn: fetchUsers });

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      QueryClient.invalidateQueries(["users"]); // 기존 캐시를 무효화하고 새 데이터를 가져옴
    },
  });

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <button onClick={() => mutation.mutate({ name: "Jeong", email: "o3ouo@daum.net" })}>Add User</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;