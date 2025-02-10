import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from './reducers/userSlice';


function UserComponent({userId}) {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchUser(userId)); // 컴포넌트가 마운트될 때 API 요청
  }, [dispatch, userId]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>

  return (
    <div>
      {data ? (
        <div>
          <h2>{data.name}</h2>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
        </div>
      ) : (
        <p>No user data</p>
      )}
    </div>
  );
};

export default UserComponent;
