
import { useLocation } from 'react-router-dom'
import Query1 from '../query1/query1'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import React, { useState, Fragment } from 'react'
export const history = createBrowserHistory()

const Stadistics = () => {

    const onClick = () => {
        fetch('http://localhost:3001/stadistics/1')
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data);
        });
        fetch('http://localhost:3001/stadistics/2')
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data);
        });
        fetch('http://localhost:3001/stadistics/3')
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data);
        });
        fetch('http://localhost:3001/stadistics/4')
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data);
        });
        fetch('http://localhost:3001/stadistics/6')
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data);
        });
        fetch('http://localhost:3001/stadistics/7')
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data);
        });
        fetch('http://localhost:3001/stadistics/8')
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data);
        })
    }

       return (
        <div>

        <button type="submit" className='btn btn-primary ' onClick={onClick}>
            Generate Stadistics
        </button>

        <p>Artistas con más álbumes publicados</p>
        <p>Géneros con más canciones</p>
        <p>Total de duración de cada playlist</p>
        <p>Caciones de mayor duración con la información de sus artistas</p>
        <p>Usuarios que han registrado más canciones</p>
        <p>Cantidad de artistas diferentes por playlist</p>
        <p>Los artistas con más diversidad de géneros musicales</p>
      </div>
    )

    return
}


 /*  const onPress1 = () => {
    console.log
    history.push('/1')
   }

    

    return (
        <div>
            <Link to={`/1`}>
            <button type="submit" className='btn btn-primary ' onClick={onPress1}>
                Sign up
            </button>
            </Link>


                    <Link to={`/1`}>
                        <li class="list-group-item list-group-item-primary"> <Query1 list={list}></Query1> </li>
                    </Link>
   

  

        <p>Géneros con más canciones</p>
        <p>Total de duración de cada playlist</p>
        <p>Caciones de mayor duración con la información de sus artistas</p>
        <p>Usuarios que han registrado más canciones</p>
        <p>Cantidad de artistas diferentes por playlist</p>
        <p>Los artistas con más diversidad de géneros musicales</p>
      </div>
    );
  } 

*/
export default Stadistics
