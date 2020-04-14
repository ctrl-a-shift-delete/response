import React from 'react'
import { Provider } from 'react-redux'
import { mount, ReactWrapper } from 'enzyme'
import configureStore from 'redux-mock-store'
import AddPost from '../Pages/AddPost'
import postReducer, {
  editPost,
  postsInitialState,
  PostsState,
  togglePreview,
} from '../reducers/postsSlice'

const postsInitialStateMock: PostsState = { ...postsInitialState }
let testContent: string = 'Test content'
let testTitle: string = 'Test title'
postsInitialStateMock.edit = { content: testContent, title: testTitle }

describe('Add posts', () => {
  const mockStore = configureStore([])
  const store = mockStore({
    posts: postsInitialStateMock,
  })

  jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn()),
    useDispatch: () => jest.fn(),
  }))

  jest.spyOn(store, 'dispatch')

  const wrapper: ReactWrapper = mount(
    <Provider store={store}>
      <AddPost />
    </Provider>
  )

  it('should set title and content values', () => {
    expect(wrapper.find('textarea').props().value).toBe(testContent)
    expect(wrapper.find('input').props().value).toBe(testTitle)
  })

  it('should change values through redux reducer', () => {
    testTitle = 'Title2'
    testContent = 'Content2'
    const actionContent = editPost({ content: testContent })
    const actionTitle = editPost({ title: testTitle })
    Object.assign(
      postsInitialStateMock,
      postReducer(postsInitialStateMock, actionTitle)
    )
    Object.assign(
      postsInitialStateMock,
      postReducer(postsInitialStateMock, actionContent)
    )
    wrapper.find('input').simulate('change', { target: { value: testTitle } })
    wrapper
      .find('textarea')
      .simulate('change', { target: { value: testContent } })
    expect(store.dispatch).toHaveBeenCalledWith(actionTitle)
    expect(store.dispatch).toHaveBeenCalledWith(actionContent)
    expect(wrapper.find('input').props().value).toBe(testTitle)
    expect(wrapper.find('textarea').props().value).toBe(testContent)
  })

  it('should display preview', () => {
    Object.assign(
      postsInitialStateMock,
      postReducer(postsInitialStateMock, togglePreview())
    )
    wrapper.find('.preview').simulate('click')
    expect(store.dispatch).toHaveBeenCalledWith(togglePreview())
    expect(wrapper.find('.preview').text()).toBe('Disable preview')
    expect(wrapper.find('.preview-content .title').text()).toBe(testTitle)
    expect(wrapper.find('.preview-content .content').text()).toBe(testContent)
  })
})
