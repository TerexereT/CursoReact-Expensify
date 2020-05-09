import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import ExpenseDBPage from '../components/Dashboard'
import AddExpenseDBPage from '../components/AddExpense'
import EditExpenseDBPage from '../components/EditExpense'
import HelpExpenseDBPage from '../components/Help'
import NotFoundDBPage from '../components/NotFound'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
    </div>
        <Switch>
            <Route 
            path="/"
            component={ExpenseDBPage}
            exact={true}
            />
            <Route 
                path="/create"
                component={AddExpenseDBPage}
            />
            <Route 
                path="/edit/:id"
                component={EditExpenseDBPage}
            />
            <Route 
                path="/help"
                component={HelpExpenseDBPage}
            />
            <Route 
                
                component={NotFoundDBPage}
            />
        </Switch>
    </BrowserRouter>
)

export default AppRouter