import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('remove expense action test', () =>{
    const action = removeExpense({id: '123abc'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('edit expense action test', () =>{
    const action = editExpense('123abc', {note: 'nuevo'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'nuevo'
        }
    })
})

test ('add expense action test',() =>{
    const data = {
    description: 'renta movistar',
    note:'mayo',
    amount: 81740,
    createdAt: 1000}
    const action = addExpense(data)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...data,
            id: expect.any(String)
        }
    })
})

test ('add expense default action test',()=>{
    const data = {
        description: '',
        note:'',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...data,
            id: expect.any(String)
        }
    })
})