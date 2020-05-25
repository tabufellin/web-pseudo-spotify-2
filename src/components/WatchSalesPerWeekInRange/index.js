import React, { useState, Fragment } from 'react';

import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
 //NOT DONE
const WatchSalesPerWeekInRange = ({ onSubmit }) => {
    const [dateBegin, changeDateBegin]=useState('')

    const [dateEnd, changeDateEnd] = useState('')
    const [info, setInfo] = useState([])

    const onPressBuscar = () => {
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
             //   reporte.length = 0
                setList([...list, ...response]) 
            });

        }
     
     
      console.log(dateBegin)
      console.log(dateEnd)

      

        console.log('entre aqui') 
        displayDataDB('http://localhost:3001/total-sales-per-week', info, setInfo)

    }

    console.log(info)


    return (
      <Fragment>
        


        <div class="square">
            <h1>Ver compras por semana en un rango de tiempo</h1>

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
            <div>{info.map((i, index) => <p key={index}>Semana del: {i.dia_lunes_semana} Total: {i.suma_total} </p>)}</div>

   
        </div>
      </Fragment>
    );
  } 

  export default WatchSalesPerWeekInRange