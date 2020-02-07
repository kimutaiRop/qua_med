import React from 'react'
import {Redirect, Route} from 'react-router-dom'

const BaseRouter = ({comp: Comp, ...rest}) => (
    <Route {...rest} render={props => (
        rest.login ?
            localStorage.getItem('token') ?
                <Comp {...props} /> :
                <Redirect to={'/login'}/> :
            <Comp {...props} />
    )}/>
);
export default BaseRouter