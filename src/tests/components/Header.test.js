import React from 'react'
import Header from '../../components/Header'
import toJSON, { toJson } from 'enzyme-to-json'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'

test('header render', () => {
    const wrapper = shallow(<Header />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})
 