import React from 'react'
import { mount, ReactWrapper } from 'enzyme'
import Footer from '../components/Footer'

describe('Footer', () => {
  const wrapper: ReactWrapper = mount(<Footer />)

  it('should display footer', () => {
    expect(wrapper.find('.footer').length).toBe(1)
  })
})
