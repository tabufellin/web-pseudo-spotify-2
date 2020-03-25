import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import {styles} from './styles.css'

export const history = createBrowserHistory()
const SignUp = ({ onSubmit }) => {
    const [userName, changeUserName] = useState('');
    const [password, changePassword] = useState('');

    const onPress = (userName, password) => {

      const request = new Request('http://localhost:3001/signup',{
                method:'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({userName:userName,password:password,hasPermision:false})
            })

      fetch(request).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));


      console.log("Hola")

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
        <form action="/sign-up" method="POST" >

        
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
        <Link to={{pathname: '/sign-up'} }>
          <button type="submit" onClick={() => onPress(userName,password)}>
            Submit
          </button>
        </Link>

        </form>
      </div>
      
    );
  } 

  export default SignUp
