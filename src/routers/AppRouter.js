import React from 'react'
import createHistory from 'history/createBrowserHistory'
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom'
import ExpenseDBPage from '../components/Dashboard'
import AddExpenseDBPage from '../components/AddExpense'
import EditExpenseDBPage from '../components/EditExpense'
import PublicRoute from './PublicRoute'
import NotFoundDBPage from '../components/NotFound'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>

            <Switch>
                <PublicRoute
                path="/"
                component={LoginPage}
                exact={true}            
                />
                <PrivateRoute 
                path="/dashboard"
                component={ExpenseDBPage}
                // exact={true}
                />
                <PrivateRoute 
                    path="/create"
                    component={AddExpenseDBPage}
                />
                <PrivateRoute 
                    path="/edit/:id"
                    component={EditExpenseDBPage}
                />

                <PublicRoute  
                    component={NotFoundDBPage}
                />
            </Switch>
        </div>
    </Router>
)

export default AppRouter