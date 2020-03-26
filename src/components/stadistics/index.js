
import { useLocation } from 'react-router-dom'
import Query1 from '../query1/query1'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, Fragment } from 'react'
export const history = createBrowserHistory()

const Stadistics = () => {

    const [list, setList] = useState([])
    const [list2, setList2] = useState([])
    const [list3, setList3] = useState([])
    const [list4, setList4] = useState([])
    const [list5, setList5] = useState([])
    const [list6, setList6] = useState([])
    const [list7, setList7] = useState([])
    const [list8, setList8] = useState([])

 /*   const onClick = () => {




        fetch('http://localhost:3001/stadistics/1')
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data)            

        });
        fetch('http://localhost:3001/stadistics/2')
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data);
        });
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
            console.log(data);
        })
    }
*/
    return (
    <div>

    <button type="submit" className='btn btn-primary '
     onClick={(e) => {
        fetch('http://localhost:3001/stadistics/1')
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data) 
            setList([...list, ...data])           
        });
        
     }}>
         Artistas con más álbumes publicados
        
    </button>

    <p>  {list.map((i, index) => <div key={index}> {i.name} {i.cantalbum} </div>)}   </p>

    <button type="submit"className='btn btn-primary ' onClick={(e) => {
        fetch('http://localhost:3001/stadistics/2')
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data) 
            setList2([...list2, ...data])           
        });

    }}>
        Cantidad de caciones por genero
    </button>

    <p> {list2.map((i, index) => <div key={index}> Genero: {i.name} : {i.cantcanciones} canciones</div>)} </p>




    <button type="submit"className='btn btn-primary ' onClick={(e) => {
        fetch('http://localhost:3001/stadistics/3')
        .then(function(response) {
            console.log("holaa")
            return (response.json());
        })
        .then(function(data) {
            console.log(data) 
            setList5([...list5, ...data])           
        });

    }}>
        Total de duración de cada playlist
    </button>

    <p> {list5.map((i, index) => <div key={index}> playlist {i.name}: tiempo total en milisegundos: {i.sum}</div>)} </p>

    <button type="submit"className='btn btn-primary ' onClick={(e) => {
        
        fetch('http://localhost:3001/stadistics/4')
        .then(function(response) {
            return (response.json());
            

        })
        .then(function(data) {
            console.log("hola")
            console.log(data) 
            setList4([...list4, ...data])           
        });

    }}>
        Canciones de mayor duración con su artista
    </button>  

    <p> {list4.map((i, index) => <div key={index}> Artista {i.name}, tiempo de duración: {i.milliseconds}  </div>)}</p>








    <button type="submit"className='btn btn-primary ' onClick={(e) => {
        
        fetch('http://localhost:3001/stadistics/6')
        .then(function(response) {
            return (response.json());
            

        })
        .then(function(data) {
            console.log("hola")
            console.log(data) 
            setList3([...list3, ...data])           
        });

    }}>
        Promedio de duracion de canciones segun el genero
    </button>   

    <p> {list3.map((i, index) => <div key={index}> Genero: {i.name}, promedio de duración de sus canciones: {i.prom}  </div>)}</p>


    <button type="submit"className='btn btn-primary ' onClick={(e) => {
        
        fetch('http://localhost:3001/stadistics/7')
        .then(function(response) {
            return (response.json());
            

        })
        .then(function(data) {
            console.log("hola")
            console.log(data) 
            setList6([...list6, ...data])           
        });

    }}>
        Cantidad de artistas diferentes por playlist
    </button> 
    
    <p> {list6.map((i, index) => <div key={index}> playlist: {i.name}, cantidad de artistas {i.count}  </div>)}</p>

    <button type="submit"className='btn btn-primary ' onClick={(e) => {
        
        fetch('http://localhost:3001/stadistics/8')
        .then(function(response) {
            return (response.json());
            

        })
        .then(function(data) {
            console.log("hola")
            console.log(data) 
            setList7([...list7, ...data])           
        });

    }}>
        Artistas con más cantidad de generos musicales
    </button> 

    <p> {list7.map((i, index) => <div key={index}>{i.name}, con {i.count} generos musicales diferentes </div>)}</p>



    </div>

)



    }

export default Stadistics
