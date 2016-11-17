import React, { PropTypes as T } from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'
import AuthService from '../../../utils/AuthService'
import styles from './styles.module.css'
//import Auth0Lock from 'auth0-lock-passwordless'


export class Login extends React.Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    location: T.object,
    auth: T.instanceOf(AuthService)
  }

  render() {
    const { auth } = this.props
    return (
      <div className={styles.root}>
        <h2>Task Manager</h2>
        <Button bsStyle="primary" onClick={auth.login.bind(this)}>Login</Button>
      </div>
    )
  }
}

export default Login;
