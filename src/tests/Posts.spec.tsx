import React from 'react'
import { Provider } from 'react-redux'
import { mount, ReactWrapper } from 'enzyme'
import configureStore from 'redux-mock-store'
import Posts from '../Pages/Posts'
import { postsInitialState, PostsState } from '../reducers/postsSlice'

jest.mock('../reducers/postsSlice', () => ({
  getPosts: () => ({ type: 1 }),
}))

const postsInitialStateMock: PostsState = { ...postsInitialState }
postsInitialStateMock.all = [
  { id: 1, title: 'Title 1', content: 'Content 1' },
  { id: 2, title: 'Title 2', content: 'Content 2' },
  { id: 3, title: 'Title 3', content: 'Content 3' },
  { id: 234234, title: '', content: '' },
  { id: 22, title: undefined, content: undefined },
]

describe('Posts', () => {
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
      <Posts max={0} />
    </Provider>
  )

  it('should display posts with id, title, content', () => {
    expect(wrapper.find('.card.preview-content')).toHaveLength(
      postsInitialStateMock.all.length
    )
    wrapper.find('.title').forEach((node, index) => {
      expect(node.text()).toBe(postsInitialStateMock.all[index].title || '')
    })
    wrapper.find('.content').forEach((node, index) => {
      expect(node.text()).toBe(postsInitialStateMock.all[index].content || '')
    })
    wrapper.find('.post-id').forEach((node, index) => {
      expect(Number(node.text().replace('ID:', ''))).toBe(
        postsInitialStateMock.all[index].id
      )
    })
  })
})
