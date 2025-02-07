import { createStore } from "redux";

// 초기 상태
const initialState = { count: 0 };

// 리듀서
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

// 스토어 생성
const store = createStore(counterReducer);

export default store;

