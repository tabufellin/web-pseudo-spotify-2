import React, { useState, Fragment } from 'react';

import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
 //NOT DONE
const TracksMorePlayedArtist = ({ onSubmit }) => {
    const [cuantasCanciones, changeCuantasCanciones] = useState('')
    const [artistid, changeartistid]=useState('')
    const [info, setInfo] = useState([])

    const onPressBuscar = () => {
        console.log(artistid, cuantasCanciones)
        const displayDataDB = (link, list, setList) => {

            const request = new Request(link ,{
                method:'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({artistid: artistid, limit: cuantasCanciones})
            })

            fetch(request).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response)
                list.length = 0
                setList([...list, ...response]) 
            });

        }
        console.log('entre aqui') 
        displayDataDB('http://localhost:3001/reproducciones-por-artista', info, setInfo)

    }

    console.log(info)


    return (
      <Fragment>
        


        <div class="square">
        <h1>Ver N canciones más vendidas de un artista por su id</h1>

        <p> ¿De que tamaño quieres tu top?</p>
        <label>
        <input
            type="number"
            placeholder=""
            name="tipo"
            value={cuantasCanciones}
            onChange={e => changeCuantasCanciones(e.target.value)}
        />
            
        </label>   


        <p>Artist id </p>

        <label>
            <input
                type="number"
                placeholder=""
                name="tipo"
                value={artistid}
                //checked = {"pipi" === selectedOption}
                onChange={e => changeartistid(e.target.value)}
            />
            
        </label>   



            <button type="submit" onClick={() => onPressBuscar({artistid})}>
            {'Buscar'}
            </button>
            <div>{info.map((i, index) => <p key={index}> {index+1}. {i.name} Total: {i.monto} </p>)}</div>

   
        </div>
      </Fragment>
    );
  } 

  export default TracksMorePlayedArtist