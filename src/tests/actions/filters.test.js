import{setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from '../../actions/filters'
import moment from 'moment'

test('SET START DATE test',()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('SET END DATE test', () =>{
    const action =setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})
//Crear 4: 2 para set text y uno para los otros
test('SET TEXT test 1',()=>{
    const action= setTextFilter('casa')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'casa'
    })
})

test('SET TEXT test 2',()=>{
    const action= setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: undefined
    })
})

test('sortyby Amount test', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
})

test('sortyby Date test', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
})