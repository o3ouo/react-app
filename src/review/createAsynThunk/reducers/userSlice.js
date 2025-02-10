import { createSlice, createAsynThunk } from "@reduxjs/toolkit";

// 비동기 액션 생성 (API 호출)
export const fetchUser = createAsynThunk(
  'user/fetchUser', // 액션 타입
  async (userId, thunkAPI) => { // 비동기 함수 (userId를 받아 API 요청)
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
      const data = await response.json();
      return data; // 성공하면 데이터 반환 (fulfilled에서 사용)
    } catch (error) {
      return thunkAPI.rejectWithvalue(error.massage); // 실패하면 에러 반환 (rejected에서 사용)
    }
  }
);

// Slice 생성
const userSlice = createSlice({
  name: "user",
  initialState: {
    data: null,
    status: "idle", // "idle" | "loading" | "succeeded" | "failed"
    error: null,
  },
  retucers: {}, // 일반 동기 액션은 여기에 추가
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading'; // 로딩 상태
        state.errir = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded'; // 성공 상태
        state.data = action.payload; // API에서 받아온 데이터 저장
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed'; // 실패 상태
        state.error = action.payload; // 에러 메시지 저장
      });
  },
});

export default userSlice.reducer;