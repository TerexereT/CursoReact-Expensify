import React from 'react'
import {shallow} from 'enzyme'
import {ExpensesSum} from '../../components/ExpensesSum'

test('ver si muestra para 1 expense', () =>{
    const wrapper = shallow(
        <ExpensesSum 
        expenseCount={1} ExpensesTotal={1306}/>
    )
    expect(wrapper).toMatchSnapshot()
})

test('ver si muestra para 2 o mas expenses', () =>{
    const wrapper = shallow(
        <ExpensesSum 
        expenseCount={23} ExpensesTotal={123565345}/>
    )
    expect(wrapper).toMatchSnapshot()
})