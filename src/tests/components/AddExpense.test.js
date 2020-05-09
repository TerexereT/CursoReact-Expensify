import React from 'react'
import { shallow } from 'enzyme'
import {AddExpenseDBPage} from '../../components/AddExpense'
import expense from '../fixtures/expenses'
import expenses from '../fixtures/expenses'

let addExpense, history, wrapper

beforeEach(() => {
    addExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<AddExpenseDBPage addExpense={addExpense} history={history}/>)
})

test('render addexpense', () => {
    expect(wrapper).toMatchSnapshot()
})

test('handle onSubmit()', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expense[1])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1])
})