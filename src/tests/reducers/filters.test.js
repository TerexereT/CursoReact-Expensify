import filtersReducers from '../../reducers/filters.js'
import moment from 'moment'

test('filter values default', () =>{
    const state = filtersReducers(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('sortby to amount', ()=>{
    const state = filtersReducers(undefined,{type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('sortby to date', ()=>{
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action= {type: 'SORT_BY_DATE'}
    const state = filtersReducers(currentState, action)
    expect(state.sortBy).toBe('date')
})

//SET_START_DATE ,SET_END_DATE, SET_TEXT_FILTER

test('set text filter', () =>{
    const state = filtersReducers(undefined,{type: 'SET_TEXT_FILTER', text: 'hola'})
    expect(state.text).toBe('hola')
})

test('set start date test', () =>{
    const startDate = moment()
    const state = filtersReducers(undefined,{type: 'SET_START_DATE', startDate: startDate})
    expect(state.startDate).toEqual(startDate)
})

test('set END date test', () =>{
    const endDate = moment()
    const state = filtersReducers(undefined,{type: 'SET_END_DATE', endDate: endDate})
    expect(state.endDate).toEqual(endDate)
})