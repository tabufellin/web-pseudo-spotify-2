import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'

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
        <div className='logIn'>
          <h1>Log In</h1>

          <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">@</span>
                </div>
              <input 
                type="text" className="form-control" placeholder="Username" 
                aria-label="Username" aria-describedby="basic-addon1" 
                value={userName} onChange={e => changeUserName(e.target.value)}/>
          </div>

          <div className="input-group mb-3">
                <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">*</span>
                </div>
              <input 
                type="text" className="form-control" placeholder="password" 
                aria-label="password" aria-describedby="basic-addon1" 
                value={password} onChange={e => changePassword(e.target.value)}/>
          </div>

          <Link to={`/user/${userName}`}>
            <button type="submit" className='btn btn-primary' onClick={onPressLogin}>
              Iniciar sesión
            </button>
          </Link>

        </div>


        <div className='signUp'>
          <p>¿No tienes una cuenta?</p>
          <Link to={{pathname: '/sign-up'} }>
            <button type="submit" className='btn btn-primary ' onClick={onPressSignUp}>
              Sign up
            </button>
          </Link>
        </div>

      </Fragment>
      
    );
  } 

  export default LoginScreen

