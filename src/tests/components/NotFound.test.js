import React from 'react'
import NotFound from '../../components/NotFound'
import { shallow } from 'enzyme'

test('NotFound render', () => {
    const wrapper = shallow(<NotFound />)
    expect(wrapper).toMatchSnapshot()
})