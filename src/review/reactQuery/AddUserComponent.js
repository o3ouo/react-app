import { useMutation } from "@tanstack/react-query";

const addUser = async (newUser) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.strungify(newUser),
  });
  return response.json();
};

const AddUserComponent = () => {
  const mutation = useMutation({
    mutationFn: addUser, // 데이터를 변경하는 함수
    onSuccess: (data) => {
      console.log("새 유저 추가됨:", data);
    },
  });

  return (
    <button onClick={() => mutation.mutate({ name: "AJong", email: "o3ouo@daum.net" })}>Add User</button>
  );
};

export default AddUserComponent;