import { combineReducers } from '@reduxjs/toolkit'
import TestReducer from '../reducers/testSlice'
import PostsReducer from '../reducers/postsSlice'

const rootReducer = combineReducers({
  test: TestReducer,
  posts: PostsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer

export interface ReducerType {
  payload: any
  type: String
}
