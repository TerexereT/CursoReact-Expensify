import React from 'react'
import ExpenseList from './ExpenseList'
import ExpenseListFilters from './ExpenseListFilters'

const ExpenseDBPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
)

export default ExpenseDBPage