import React from 'react'
import ExpenseDBPage from '../../components/Dashboard'
import { shallow } from 'enzyme'

test('dashboard render', () => {
    const wrapper = shallow(<ExpenseDBPage />)
    expect(wrapper).toMatchSnapshot()
})