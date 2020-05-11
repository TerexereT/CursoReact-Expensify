import React from 'react'
import { shallow } from 'enzyme'
import {AddExpenseDBPage} from '../../components/AddExpense'
import expense from '../fixtures/expenses'
import expenses from '../fixtures/expenses'

let startAddExpense, history, wrapper

beforeEach(() => {
    startAddExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<AddExpenseDBPage startAddExpense={startAddExpense} history={history}/>)
})

test('render addexpense', () => {
    expect(wrapper).toMatchSnapshot()
})

test('handle onSubmit()', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[1])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(startAddExpense).toHaveBeenLastCalledWith(expenses[1])
})