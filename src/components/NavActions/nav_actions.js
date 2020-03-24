import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import './styles.css';
export const history = createBrowserHistory()


const NavActions = ({path}) => {

    return (

      <div className='square'> 
            <div className='square'>
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

            </div>

            <div className='square'>

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

            </div>



            

            <div className='dataBig'>
                <nav >
                    
                    <ul>
                        
                        <Link to={`${path}/users`}>
                            <li > <h1>users</h1> </li>
                        </Link>
                        <Link to={`${path}/stadistics`}>
                            <li> <h1>stadistics</h1> </li>
                        </Link>
                    </ul>
                </nav>
            </div>



      </div>
      
    );
  } 


export default NavActions
