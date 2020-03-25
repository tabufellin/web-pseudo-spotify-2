import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
export const history = createBrowserHistory()


const NavActions = ({path}) => {

    return (

      <div>
            <h1> Search</h1>
            <nav>
                <ul>
                    <Link to={`${path}/search/song`}>
                        <li className="list-group-item list-group-item-primary"> song </li>
                    </Link>
                    <Link to={`${path}/search/album`}>
                        <li className="list-group-item list-group-item-primary"> album </li>
                    </Link>
                    <Link to={`${path}/search/artist`}>
                        <li className="list-group-item list-group-item-primary"> artist </li>
                    </Link>
                </ul>

            </nav>

            <h1> Add</h1>

            <nav>
                <ul>
                    <Link to={`${path}/add/song`}>
                        <li className="list-group-item list-group-item-primary"> song </li>
                    </Link>
                    <Link to={`${path}/add/album`}>
                        <li className="list-group-item list-group-item-primary"> album </li>
                    </Link>
                    <Link to={`${path}/add/artist`}>
                        <li className="list-group-item list-group-item-primary"> artist </li>
                    </Link>
                </ul>
            </nav>
            


            <nav>
                
                <ul>
                    
                    <Link to={`${path}/users/holi`}>
                        <li > <h2>users</h2> </li>
                    </Link>
                    <Link to={`${path}/stadistics`}>
                        <li> <h2>stadistics</h2> </li>
                    </Link>
                </ul>
            </nav>
      </div>
      
    );
  } 


export default NavActions
