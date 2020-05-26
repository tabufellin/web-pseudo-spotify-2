import React, { useState, Fragment } from 'react';

import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
 //NOT DONE
const GenresWithMoreSalesInRange = ({ onSubmit }) => {
    const [dateBegin, changeDateBegin]=useState('')
    const [dateEnd, changeDateEnd] = useState('')
    const [info, setInfo] = useState([])

    const onPressBuscar = () => {
        console.log( dateBegin, dateEnd)
        const displayDataDB = (link, list, setList) => {

            const request = new Request(link ,{
                method:'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({dateBegin: dateBegin, dateEnd: dateEnd})
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
        displayDataDB('http://localhost:3001/genres-more-sales-in-range', info, setInfo)

    }

    console.log(info)


    return (
      <Fragment>
        


        <div class="square">
        <h1>Ver generos con más ventas en un rango de tiempo</h1> 


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

  export default GenresWithMoreSalesInRange