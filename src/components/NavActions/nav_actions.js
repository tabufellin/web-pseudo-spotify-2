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
                        <button className="btn btn-outline-primary"> song </button>
                    </Link>
                    <Link to={`${path}/search/album`}>
                     <button className="btn btn-outline-primary"> album </button>
                    </Link>
                    <Link to={`${path}/search/artist`}>
                    <button className="btn btn-outline-primary"> artist </button>
                    </Link>
                </ul>

            </nav>

            <h1> Add</h1>

            <nav>
                <ul>
                    <Link to={`${path}/add/song`}>
                    <button className="btn btn-outline-primary"> song </button>
                    </Link>
                    <Link to={`${path}/add/album`}>
                    <button className="btn btn-outline-primary"> album </button>
                    </Link>
                    <Link to={`${path}/add/artist`}>
                    <button className="btn btn-outline-primary"> artist </button>
                    </Link>
                </ul>
            </nav>
            


            <nav>
                
                <ul>
                    <Link to={`${path}/stadistics`}>
                    <button className="btn btn-outline-primary"> stadistics </button>
                    </Link>
                    <Link to={`${path}/bitacora`}>
                    <button className="btn btn-outline-primary"> logbook </button>
                    </Link>
                    <Link to={`${path}/cart`}>
                    <button className="btn btn-outline-primary"> cart </button>
                    </Link>
                    <Link to={`${path}/mysongs`}>
                    <button className="btn btn-outline-primary"> My Songs </button>
                    </Link>
                    <Link to={`${path}/simulate_sales`}>
                        <li> <h2>Simulate Sales</h2> </li>
                    </Link>
                    <Link to={`${path}/generar-reportes`}>
                    <button className="btn btn-outline-primary"> Generar Reporte </button>
                    </Link>
                    <Link to={`${path}/generar-recomendaciones`}>
                    <button className="btn btn-outline-primary"> Generar Recomendaciones </button>
                    </Link>
                </ul>
            </nav>
      </div>
      
    );
  } 


export default NavActions
