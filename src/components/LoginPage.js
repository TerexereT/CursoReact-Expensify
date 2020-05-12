import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../actions/auth'

export const LoginPage = ({startLogin}) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>¡Lleva tus compras bajo control aqui!</p>
            <button className="button-layout" onClick={startLogin}>Login with Google</button>
        </div>
        
    </div>
)

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)