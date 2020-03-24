import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import NavActions from '../NavActions/nav_actions'


export const history = createBrowserHistory()


const Admin = () => {

    return (

      <Fragment>
        
        <NavActions path='/user/admin'></NavActions>

      </Fragment>
      
    );
  } 


export default Admin
