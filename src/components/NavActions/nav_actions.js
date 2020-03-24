import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
import NavAAS from '../NavAAS/navass'
export const history = createBrowserHistory()


const NavActions = ({path}) => {

    return (

      <nav>
        
        <ul>
            <Link to={`${path}/search`} >
                <li> Search </li>
            </Link>
            <Link to={`${path}/add`}>
                <li> add </li>
            </Link>
            <Link to={`${path}/users`}>
                <li> users </li>
            </Link>
            <Link to={`${path}/stadistics`}>
                <li> stadistics </li>
            </Link>
        </ul>

      </nav>
      
    );
  } 


export default NavActions
