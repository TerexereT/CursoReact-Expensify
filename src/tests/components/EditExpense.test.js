import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import {EditExpenseDBPage} from '../../components/EditExpense'

let editExpense, removeExpense, history, wrapper

beforeEach(() => {
    editExpense=jest.fn(),
    removeExpense=jest.fn(),
    history={push: jest.fn()},
    wrapper =  shallow(
        <EditExpenseDBPage
        editExpense={editExpense}
        removeExpense={removeExpense}
        history={history}
        expense={expenses[2]}
        />
    )
})

test('render editexpense', () =>{
    expect(wrapper).toMatchSnapshot()
})

test('handle editexpense', () =>{
   wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
   expect(history.push).toHaveBeenLastCalledWith('/') 
   expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2])
})

test('handle removeexpense', () =>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/') 
    expect(removeExpense).toHaveBeenLastCalledWith({
        id: expenses[2].id
    })
})