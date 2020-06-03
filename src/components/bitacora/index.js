import { useLocation } from 'react-router-dom'
import Query1 from '../query1/query1'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css'
import React, { useState, Fragment } from 'react'
import exportCSVFile from '../../functions/csvThings'
export const history = createBrowserHistory()


const Bitacora = () => {

    const [list, setList] = useState([])

    const displayDataDB = (link, list, setList) => {
        fetch(link)
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data) 
            list.length = 0
            setList([...list, ...data])                    
        });
    }

    displayDataDB('http://localhost:3001/bitacora', list, setList)





    return (
    <div>
        
        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">action_type_id</th>
            <th scope="col">albumid</th>
            <th scope="col">artistid</th>
            <th scope="col">trackid</th>
            <th scope="col">created at</th>
            <th scope="col">id</th>
            <th scope="col">id_username</th>
            </tr>
        </thead>
        {list.map((i, index) => {
            return(
                <tbody>
                <th scope="row">{index+1}</th>
                <td> {i.action_type_id}</td>
                <td> {i.albumid}</td>
                <td> {i.artistid}</td>
                <td> {i.trackid} </td>
                <td> {i.created_at} </td>
                <td> {i.id} </td>
                <td> {i.id_username} </td>
                </tbody>
            )

        })}
        
        </table>


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
