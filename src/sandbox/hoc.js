//Higher Oder Componen - Componente que renderiza otro componente
//Para reausar codigo
//Render Hijacking
//Abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isADmin && <p>This is private info, dont share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requiereAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? (
            <WrappedComponent {...props}/>
            ) : (
                <p>Please log in</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requiereAuth(Info)

//ReactDOM.render(<AdminInfo isADmin={false} info="there are the details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuth={false} info="there are the details" />, document.getElementById('app'))