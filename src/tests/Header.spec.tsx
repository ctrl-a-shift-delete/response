import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Header from '../components/Header'
import { postsInitialState, PostsState } from '../reducers/postsSlice'

const postsInitialStateMock: PostsState = { ...postsInitialState }
postsInitialStateMock.all = [
  { id: 1, title: 'Title 1', content: 'Content 1' },
  { id: 2, title: 'Title 2', content: 'Content 2' },
  { id: 3, title: 'Title 3', content: 'Content 3' },
  { id: 234234, title: '', content: '' },
  { id: 22, title: undefined, content: undefined },
]

describe('Header', () => {
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
      <Header />
    </Provider>
  )

  it('should display header and total posts', () => {
    expect(wrapper.find('.hero-body').length).toBe(1)
    expect(wrapper.find('.post-count').text()).toBe(
      `Total posts: ${postsInitialStateMock.all.length}`
    )
  })
})
