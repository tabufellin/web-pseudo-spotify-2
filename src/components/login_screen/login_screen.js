import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
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

        <div class="input-group mb-3">
              <div class="input-group-prepend">
               <span class="input-group-text" id="basic-addon1">@</span>
              </div>
            <input 
              type="text" class="form-control" placeholder="Username" 
              aria-label="Username" aria-describedby="basic-addon1" 
              value={userName} onChange={e => changeUserName(e.target.value)}/>
        </div>

        <div class="input-group mb-3">
              <div class="input-group-prepend">
               <span class="input-group-text" id="basic-addon1">*</span>
              </div>
            <input 
              type="text" class="form-control" placeholder="password" 
              aria-label="password" aria-describedby="basic-addon1" 
              value={password} onChange={e => changePassword(e.target.value)}/>
        </div>

        <Link to={`/user/${userName}`}>
          <button type="submit" class='btn btn-primary' onClick={onPressLogin}>
            Submit
          </button>
        </Link>

        <p>¿No tienes una cuenta?</p>
        <Link to={{pathname: '/sign-up'} }>
          <button type="submit" class='btn btn-primary ' onClick={onPressSignUp}>
            Sign up
          </button>
        </Link>
      </Fragment>
      
    );
  } 

  export default LoginScreen

