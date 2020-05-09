import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseList} from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

test('render expenselist con expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test('render expenselist sin expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})

