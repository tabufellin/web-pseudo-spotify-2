import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import User from '../user/user'
export const history = createBrowserHistory()
const LoginScreen = (props) => {
    const [userName, changeUserName] = useState('');
    const [password, changePassword] = useState('');
    const [userLogged, setUserLogged] = useState('');
    const loggedIn = props.loggedIn
    const pathLink = ''


    const onPressLogin = () => {

      console.log(userName, password)

      if (userName !== '' || password !== '') {
        console.log('no es null')
        //TODO TO VALIDATE THE USERuserName AND PASSWORD 
        //IN DB
        if (userName === 'admin' && password === 'admin') {
         history.push('/user/admin')
        } else {
          console.log("voy a buscar")

          const request = new Request('http://localhost:3001/login',{
            method:'POST',
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify({userName:userName,password:password})
          })
          fetch(request).then(res => {
            return res.json()}
          )
          .catch(error => console.error('Error:', error))
          .then(res => {
            console.log('Success:', res)

            if (res.length > 0) {
              setUserLogged([...userLogged, ...res])
              console.log(res)
              const usernameid = res[0].userid
              //console.log(userName)
              const pathLink = '/user/' + usernameid
              history.push(pathLink)
            } 
          }) 
          
    

            
     

          
        }
      } 

    }

    const onPressSignUp = () => {

      if (userName !== null && password !== null) {
        //TODO TO VALIDATE THE USERuserName AND PASSWORD 
        //IN DB


      }

    }
    {console.log("el logged in esta en:" + loggedIn)}

    if (loggedIn === true) {
      return <User />
    }


    if (userLogged.length === 0 ) {
      return (

        <div className="form">
          <h1>Log In</h1>
  
          <form action="/sign-up" method="POST" >
  
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
                    type="password" className="form-control" placeholder="password" 
                    aria-label="password" aria-describedby="basic-addon1" 
                    value={password} onChange={e => changePassword(e.target.value)}/>
              </div>

              <Link to={{pathname: (pathLink)} }>
                <button type="submit" className='btn btn-primary' onClick={onPressLogin}>
                    Submit
                </button>
             </Link>
  
  
  
              <p>¿No tienes una cuenta?</p>
              <Link to={{pathname: '/sign-up'} }>
                <button type="submit" className='btn btn-primary ' onClick={onPressSignUp}>
                  Sign up
                </button>
              </Link>
                 
  
          </form>
          </div> 
   
      );
    }



    return <User />




  } 

  export default LoginScreen

