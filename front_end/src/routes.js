import React from 'react'
import {Route, IndexRedirect} from 'react-router'
import AuthService from './utils/AuthService'
import Home from './views/Main/Home/Home'
import Login from './views/Main/Login/Login'
import App from './js/components/App'
import Container from './views/Main/Container'

const auth = new AuthService('wST4uQ2OH6XLRqKH3cEUz7KWZhSUFUUp', 'task-management.auth0.com');

// onEnter callback to validate authentication in private routes
const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({ pathname: '/login' })
  }
}

export const makeRoutes = () => {   
    return (
        <Route path=''>   
            <Route path="/" component={Container} auth={auth}>
                <IndexRedirect to="/home" />
                <Route path="home" component={Home} onEnter={requireAuth} />
                <Route path="login" component={Login} />
                <Route path="app" component={App} />
                <Route path="access_token=:token" component={Login} />
            </Route>
        </Route>
    );
}
    
export default makeRoutes