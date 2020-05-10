import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('retornar 0 sin arg', () =>{
    const res = selectExpensesTotal([])
    expect(res).toBe(0)
})

test('deberia sumar una lista de 1 elemento', () =>{
    const res = selectExpensesTotal([expenses[0]])
    expect(res).toBe(2321)
})

test('deberia sumar una lista de 1 elemento', () =>{
    const res = selectExpensesTotal(expenses)
    expect(res).toBe(16963)
})