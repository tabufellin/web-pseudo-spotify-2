import React, {  Fragment } from 'react'
import { createBrowserHistory } from 'history'
import NavActions from '../NavActions/nav_actions'
import { useLocation } from 'react-router-dom'



export const history = createBrowserHistory()
const User = ({path}) => {
    let location = useLocation();
    //console.log(location.pathname);

    return (

      <Fragment>

        <NavActions path={location.pathname}></NavActions>

      </Fragment>
      
    );
  } 


export default User
