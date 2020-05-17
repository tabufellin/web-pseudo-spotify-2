
import { useLocation } from 'react-router-dom'
import Query1 from '../query1/query1'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import React, { useState, Fragment } from 'react'
import exportCSVFile from '../../functions/csvThings'
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

    const displayDataDB = (link, list, setList) => {
        fetch(link)
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data) 
            console.log(list)
            list.length = 0
            setList([...list, ...data]) 
          //  }
                      
        });
    }

    return (
    <div>
  {/*///////////////////////////////////////////////////////////////////*/ }

    <button type="submit" className='btn btn-primary '
     onClick={(e) => {
        displayDataDB('http://localhost:3001/stadistics/1', list, setList)
        document.getElementById("1").className="estoy-vivo"


     }}>
         Artistas con más álbumes publicados       
    </button>

    <p>  {list.map((i, index) => <div key={index}> {i.name} {i.cantalbum} </div>)}   </p>
    <button id="1" className="hola"
        onClick={(e) => {
            var hearders = {
                albumes: "Cantidad Albumes",    
                artista: "Artista",
            }
            exportCSVFile(hearders,list,"stats1")
        }}
    > hola</button>

    {/*///////////////////////////////////////////////////////////////////*/ }
    
    <button type="submit"className='btn btn-primary ' onClick={(e) => {
        displayDataDB('http://localhost:3001/stadistics/2', list2, setList2)
        document.getElementById("2").className="estoy-vivo"

    }}>
        Cantidad de caciones por genero
    </button>

    <p> {list2.map((i, index) => <div key={index}> Genero: {i.name} : {i.cantcanciones} canciones</div>)} </p>
    <button id="2" className="hola"
        onClick={(e) => {
            var hearders = {
                cantCanciones: "Cantidad de canciones",
                genero: "Genero",    
            }
            exportCSVFile(hearders,list2,"stats2")
        }}
    > hola</button>

    {/*///////////////////////////////////////////////////////////////////*/ }

    <button type="submit"className='btn btn-primary ' onClick={(e) => {
        displayDataDB('http://localhost:3001/stadistics/3', list5, setList5)
        document.getElementById("3").className="estoy-vivo"
    }}>
        Total de duración de cada playlist
    </button>

    <p> {list5.map((i, index) => <div key={index}> playlist {i.name}: tiempo total en milisegundos: {i.sum}</div>)} </p>
    <button id="3" className="hola"
        onClick={(e) => {
            var copiedList = [...list5]
            var hearders = {
                duracion: "Duracion en milisegundos",    
                playlist: "Playlist",
            }
            exportCSVFile(hearders,copiedList,"stats3")
        }}
    > hola</button>

    {/*///////////////////////////////////////////////////////////////////*/ }

    <button type="submit"className='btn btn-primary ' onClick={(e) => {
        displayDataDB('http://localhost:3001/stadistics/4', list4, setList4)
        document.getElementById("4").className="estoy-vivo"
    }}>
        Canciones de mayor duración con su artista
    </button>  

    <p> {list4.map((i, index) => <div key={index}> Artista {i.name}, tiempo de duración: {i.milliseconds}  </div>)}</p>
    <button id="4" className="hola"
        onClick={(e) => {
            var copiedList = [...list4]

            var itemsFormatted = [];
            // format the data
            copiedList.forEach((item) => {
                itemsFormatted.push({
                    artista: item.name.replace(/,/g, ''),    
                    duracion: item.milliseconds,
                });
            });

            var hearders = {
                artista: 'Artista'.replace(/,/g, ''),    
                duracion: 'Duracion en milisegundos',
            }
            exportCSVFile(hearders,itemsFormatted,"stats4")
        }}
    > hola</button>

    {/*///////////////////////////////////////////////////////////////////*/ }

    <button type="submit"className='btn btn-primary ' onClick={(e) => {
        displayDataDB('http://localhost:3001/stadistics/6', list3, setList3)
        document.getElementById("5").className="estoy-vivo"
    }}>
        Promedio de duracion de canciones segun el genero
    </button>   

    <p> {list3.map((i, index) => <div key={index}> Genero: {i.name}, promedio de duración de sus canciones: {i.prom}  </div>)}</p>
    <button id="5" className="hola"
        onClick={(e) => {
            var copiedList = [...list3]
            var hearders = {
                duracion: "Promedio duracion de canciones",
                genero: "Genero",    
            }
            exportCSVFile(hearders,copiedList,"stats5")
        }}
    > hola</button>

    {/*///////////////////////////////////////////////////////////////////*/ }

    <button type="submit"className='btn btn-primary ' onClick={(e) => {
        displayDataDB('http://localhost:3001/stadistics/7', list6, setList6)
        document.getElementById("6").className="estoy-vivo"
    }}>
        Cantidad de artistas diferentes por playlist
    </button> 
    
    <p> {list6.map((i, index) => <div key={index}> playlist: {i.name}, cantidad de artistas {i.count}  </div>)}</p>
    <button id="6" className="hola"
        onClick={(e) => {
            var copiedList = [...list6]
            var hearders = {
                playlist: "Playlist",
                artistas: "Cantidad de artistas",    
            }
            exportCSVFile(hearders,copiedList,"stats6")
        }}
    > hola</button>

    {/*///////////////////////////////////////////////////////////////////*/ }

    <button type="submit"className='btn btn-primary ' onClick={(e) => {
        displayDataDB('http://localhost:3001/stadistics/8', list7, setList7)
        document.getElementById("7").className="estoy-vivo"
    }}>
        Artistas con más cantidad de generos musicales
    </button> 

    <p> {list7.map((i, index) => <div key={index}>{i.name}, con {i.count} generos musicales diferentes </div>)}</p>
    <button id="7" className="hola"
        onClick={(e) => {
            var copiedList = [...list7]
            var hearders = {
                artista: "Artista",
                cantGeneros: "Cantidad de generos musicales",    
            }
            exportCSVFile(hearders,copiedList,"stats7")
        }}
    > hola</button>

    {/*///////////////////////////////////////////////////////////////////*/ }
    </div>
)
}

export default Stadistics
