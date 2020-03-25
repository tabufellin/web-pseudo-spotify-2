import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import {styles} from './styles.css'

export const history = createBrowserHistory()
const SignUp = ({ onSubmit }) => {
    const [userName, changeUserName] = useState('');
    const [password, changePassword] = useState('');

    const onPress = () => {
      var data = {
        userName: userName,
        password: password
      };
      
      fetch('https://localhost:3001/signup', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
      // .then(function(response) {
      //     return (response.json());
      // })
      // .then(function(data) {
      //     console.log(data);
      // })

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

    const componentDidMount = () => {
      console.log("mounted");
    }

    return (

      <div className="form">
        <h1>Sign Up</h1>
        <p>¡Estas a punto de crear tu cuenta!</p>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={e => changeUserName(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={e => changePassword(e.target.value)}
        />
        <Link to={{pathname: '/'} }>
          <button type="submit" onClick={onPress}>
            Submit
          </button>
        </Link>
      </div>
      
    );
  } 

  export default SignUp
