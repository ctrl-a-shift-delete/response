import React from 'react'
import { Provider } from 'react-redux'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import App from '../app/App'

describe('App', () => {
  const mockStore = configureStore([])
  const store = mockStore({})

  jest.mock('react-redux', () => ({
    useSelector: jest.fn(fn => fn()),
    useDispatch: () => jest.fn(),
  }))

  jest.spyOn(store, 'dispatch')

  it('renders without crashing.', () => {
    shallow(
      <Provider store={store}>
        <App />
      </Provider>
    )
  })
})
