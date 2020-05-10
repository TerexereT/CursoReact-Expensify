import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'
import ExpensesSum from './ExpensesSum'

const ExpenseDBPage = () => (
    <div>
        <ExpensesSum />
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDBPage