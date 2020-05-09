import moment from 'moment'

export default [{
    id: '0',
    description: 'hola',
    note: '',
    amount: 2321,
    createdAt: 0
},{
    id: '1',
    description: 'como',
    note: '',
    amount: 11321,
    createdAt: moment(0).subtract(4, 'day').valueOf()
},
{
    id: '2',
    description: 'estas',
    note: '',
    amount: 3321,
    createdAt: moment(0).add(4, 'day').valueOf()
}]