import React, {  Fragment } from 'react'
import { createBrowserHistory } from 'history'
import NavActions from '../NavActions/nav_actions'
import { useLocation } from 'react-router-dom'



export const history = createBrowserHistory()
const User = () => {
    let location = useLocation();
    const pathname = window.location.pathname;
    console.log(pathname)

    return (

      <Fragment>

        <NavActions path={pathname}></NavActions>

      </Fragment>
      
    );
  } 


export default User
