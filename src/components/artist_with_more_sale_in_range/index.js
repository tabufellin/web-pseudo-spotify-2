import React, { useState, Fragment } from 'react';

import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
 //NOT DONE
const ArtistWithMoreSaleInRange = ({ onSubmit }) => {
    const [cuantosArtistas, changeCuantosArtistas] = useState('')
    const [dateBegin, changeDateBegin]=useState('')
    const [dateEnd, changeDateEnd] = useState('')
    const [info, setInfo] = useState([])

    const onPressBuscar = () => {
        console.log(cuantosArtistas, dateBegin, dateEnd)
        const displayDataDB = (link, list, setList) => {

            const request = new Request(link ,{
                method:'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({dateBegin: dateBegin, dateEnd: dateEnd, limit: cuantosArtistas})
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
        displayDataDB('http://localhost:3001/artist-more-sales-in-range', info, setInfo)

    }

    console.log(info)


    return (
      <Fragment>
        


        <div class="square">
        <h1>Ver artistas con más ventas en un periodo de tiempo</h1>

        <p> ¿De que tamaño quieres tu top?</p>
        <label>
        <input
            type="number"
            placeholder=""
            name="tipo"
            value={cuantosArtistas}
            onChange={e => changeCuantosArtistas(e.target.value)}
        />
            
        </label>   


        <p>Ingrese la fecha de inicio </p>

        <label>
            <input
                type="date"
                placeholder=""
                name="tipo"
                value={dateBegin}
                //checked = {"pipi" === selectedOption}
                onChange={e => changeDateBegin(e.target.value)}
            />
            
        </label>   
        <label>
            <input
                type="date"
                placeholder=""
                name="tipo"
                value={dateEnd}
                //checked = {"pipi" === selectedOption}
                onChange={e => changeDateEnd(e.target.value)}
            />
            
        </label> 



            <button type="submit" onClick={() => onPressBuscar({dateBegin})}>
            {'Buscar'}
            </button>
            <div>{info.map((i, index) => <p key={index}> {index+1}. {i.name} Total: {i.monto} </p>)}</div>

   
        </div>
      </Fragment>
    );
  } 

  export default ArtistWithMoreSaleInRange