import React from 'react'
import numeral from 'numeral'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = ({expenseCount, expensesTotal}) => {
    const aux = expenseCount === 1 ? 'expensa' : 'expensas'
    const formattedExpensesTotal = numeral(expensesTotal).format('$0,0.00')
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viendo <span>{expenseCount}</span> {aux} de un total de <span>{formattedExpensesTotal}</span></h1>
                <div className="page-header__actions">
                    <Link className="button-layout" to="/create">Agregar expensa</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expensesTotal: selectExpensesTotal(visibleExpenses)
    }
}

export default connect (mapStateToProps)(ExpensesSummary)
