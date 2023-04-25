import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import dataReducer from "./slices/dataSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    data: dataReducer,
    ui: uiReducer,
    counter: counterReducer
  }
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch