import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../app/store'
import api from '../api/api'
import { Post } from '../components/PostContent'

export interface PostsState {
  all: Post[]
  preview: boolean
  edit: Post
}

export const postsInitialState: PostsState = {
  all: [],
  preview: false,
  edit: {
    title: '',
    content: '',
    id: 0,
  },
}

const postsSlice = createSlice({
  name: 'posts',
  initialState: postsInitialState,
  reducers: {
    posts(state, { payload }: PayloadAction<Post[]>) {
      state.all = payload
    },
    togglePreview: state => {
      state.preview = !state.preview
    },
    editPost(state, { payload }: PayloadAction<Post>) {
      state.edit = { ...state.edit, ...payload }
    },
    addPost(state, { payload }: PayloadAction<Post>) {
      state.all.push(payload)
    },
  },
})

export const { posts, togglePreview, editPost, addPost } = postsSlice.actions

export default postsSlice.reducer

export const getPosts = (): AppThunk => async dispatch => {
  const allPosts: Post[] = await api.getPosts()
  dispatch(posts(allPosts))
}

export const savePost = (post: Post): AppThunk => async dispatch => {
  const postResponse: Post = await api.savePost(post)
  dispatch(addPost(postResponse))
}
