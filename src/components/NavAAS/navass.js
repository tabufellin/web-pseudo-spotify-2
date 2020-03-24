import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import SearchIcon from '@material-ui/icons/Search'
export const history = createBrowserHistory()


const NavAAS = ({path}) => {

    return(
        <Fragment>

        <nav> 
            <ul>
                <Link to={`${path}/song`}>
                    <li> song </li>
                </Link>
                <Link to={`${path}/album`}>
                    <li> album </li>
                </Link>
                <Link to={`${path}/usartisters`}>
                    <li> artist </li>
                </Link>
            </ul>
        </nav>

    </Fragment>

    );



      
    } 


export default NavAAS
