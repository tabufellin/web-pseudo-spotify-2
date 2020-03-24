import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
export const history = createBrowserHistory()
import './styles.css';

const NavActions = ({path}) => {

    return (

      <div>
            <h1> Search</h1>
            <nav>
                <ul>
                    <Link to={`${path}/search/song`}>
                        <li class="list-group-item list-group-item-primary"> song </li>
                    </Link>
                    <Link to={`${path}/search/album`}>
                        <li class="list-group-item list-group-item-primary"> album </li>
                    </Link>
                    <Link to={`${path}/search/artist`}>
                        <li class="list-group-item list-group-item-primary"> artist </li>
                    </Link>
                </ul>

            </nav>

            <h1> Add</h1>

            <nav>
                <ul>
                    <Link to={`${path}/add/song`}>
                        <li class="list-group-item list-group-item-primary"> song </li>
                    </Link>
                    <Link to={`${path}/add/album`}>
                        <li class="list-group-item list-group-item-primary"> album </li>
                    </Link>
                    <Link to={`${path}/add/artist`}>
                        <li class="list-group-item list-group-item-primary"> artist </li>
                    </Link>
                </ul>
            </nav>
            


            <nav>
                
                <ul>
                    
                    <Link to={`${path}/users/holi`}>
                        <li > <h1>users</h1> </li>
                    </Link>
                    <Link to={`${path}/stadistics`}>
                        <li> <h1>stadistics</h1> </li>
                    </Link>
                </ul>
            </nav>


      </div>
      
    );
  } 


export default NavActions
