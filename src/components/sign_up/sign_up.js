import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
export const history = createBrowserHistory()
const SignUp = ({ onSubmit }) => {
    const [userName, changeUserName] = useState('');
    const [password, changePassword] = useState('');

    const onPress = () => {

      console.log(userName, password)

      if (userName !== '' || password !== '' || userName !== 'admin' || password !== 'password') {

        history.goBack()
        //TODO TO VALIDATE THE USERuserName AND PASSWORD 
        //IN DB
          
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
        <h1>Sign Up</h1>
        <p>¡Estas a punto de crear tu cuenta!</p>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={e => changeUserName(e.target.value)}
        />
        <input
          type="text"
          placeholder="password"
          value={password}
          onChange={e => changePassword(e.target.value)}
        />
        <Link to={{pathname: '/'} }>
          <button type="submit" onClick={onPress}>
            Submit
          </button>
        </Link>
      </Fragment>
      
    );
  } 

  export default SignUp
