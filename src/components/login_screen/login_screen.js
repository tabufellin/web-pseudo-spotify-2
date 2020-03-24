import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
export const history = createBrowserHistory()
const LoginScreen = ({ onSubmit }) => {
    const [userName, changeUserName] = useState('');
    const [password, changePassword] = useState('');

    const onPressLogin = () => {

      console.log(userName, password)

      if (userName !== '' || password !== '') {
        console.log('no es null')
        //TODO TO VALIDATE THE USERuserName AND PASSWORD 
        //IN DB
        if (userName === 'admin' && password === 'admin') {
          history.push('/user/admin')
        } else {
          history.push('/user/' + userName)
        }

      } 

    }

    const onPressSignUp = () => {

      if (userName !== null && password !== null) {
        //TODO TO VALIDATE THE USERuserName AND PASSWORD 
        //IN DB


      }

    }


    return (

      <Fragment>
        <h1>Log In</h1>
        <input
          type="text"
          placeholder="userName"
          value={userName}
          onChange={e => changeUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={e => changePassword(e.target.value)}
        />
        <Link to={`/user/${userName}`}>
          <button type="submit" onClick={onPressLogin}>
            Submit
          </button>
        </Link>{' '}
        <p>¿No tienes una cuenta?</p>
        <Link to={{pathname: '/sign-up'} }>
          <button type="submit" onClick={onPressSignUp}>
            Sign up
          </button>
        </Link>
      </Fragment>
      
    );
  } 

  export default LoginScreen

