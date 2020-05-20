import React, {  Fragment } from 'react'
import { createBrowserHistory } from 'history'
import NavActions from '../NavActions/nav_actions'
import { useLocation } from 'react-router-dom'



export const history = createBrowserHistory()
const User = () => {
    let location = useLocation();
    console.log(location.pathname);
    var pathname = window.location.pathname;

    return (

      <Fragment>

        <NavActions path={pathname}></NavActions>

      </Fragment>
      
    );
  } 


export default User
