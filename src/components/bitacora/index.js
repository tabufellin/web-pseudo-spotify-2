import { useLocation } from 'react-router-dom'
import Query1 from '../query1/query1'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import React, { useState, Fragment } from 'react'
import exportCSVFile from '../../functions/csvThings'
export const history = createBrowserHistory()

let bandera = false

const Bitacora = () => {

    const [list, setList] = useState([])

    const displayDataDB = (link, list, setList) => {
        fetch(link)
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data) 
           // list.length = 0
            setList([...list, ...data])                    
        });
    }


    if (!bandera) {
        displayDataDB('http://localhost:3001/bitacora', list, setList)
        bandera = true
    }




    return (
    <div>
        
        {}


    <p>  {list.map((i, index) => <div key={index}> {i.action_type_id} album id {i.albumid} artist id{i.artistid} track id {i.trackid} {i.created_at} {i.id} {i.id_username}  </div>)}   </p>

    <button id="1" className="hola"
        onClick={(e) => {
            var hearders = {
                albumes: "Cantidad Albumes",    
                artista: "Artista",
            }
            exportCSVFile(hearders,list,"stats1")
        }}
    > hola
    </button>



        </div>
)
}

export default Bitacora
