import moment from 'moment'
import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'


test('set default state', () =>{
    const state = expensesReducer(undefined,{type: "@@INIT"})
    expect(state).toEqual([])
})

test('remove expense by id test', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('not remove expense by id not fount test', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('adding expense', () =>{
    const expense = {
        id: '3',
        description: '?',
        note: '',
        amount: 100000,
        createdAt: 0
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('edit expense', () =>{
    const amount = 0
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount}
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount)
})

test('not edit expense: id not found', () =>{
    const amount = 0
    const action = {
        type: 'EDIT_EXPENSE',
        id: -1,
        updates: {
            amount}
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[1]])
})