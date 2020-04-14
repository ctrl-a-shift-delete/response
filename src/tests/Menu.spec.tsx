import React from 'react'
import { shallow } from 'enzyme'
import Menu from '../components/Menu'

describe('Menu', () => {
  const wrapper = shallow(<Menu />)

  it('should display Menu', () => {
    expect(wrapper.find('.menu').length).toBe(1)
  })
})
