import React, { useState, Fragment } from 'react';

import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
 //NOT DONE
const GenerarReporte = ({ onSubmit }) => {
    const [date, changedate]=useState('')
    const [reporte, setReporte] = useState('')
    var pathname = window.location.pathname;
    const largo = pathname.length - 17
    let saltoA = pathname.substr(0, largo)

    const onPressBuscar = (date) => {
        console.log(date)
        const displayDataDB = (link, list, setList) => {

            const request = new Request(link ,{
                method:'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({date: date})
            })

            fetch(request).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response)
             //   reporte.length = 0
                setReporte([...reporte, response]) 
            });

        }
        console.log('entre aqui') 
        displayDataDB('http://localhost:3001/show-client-of-day', reporte, setReporte)

    }

    const onPressGenerar = () => {
        const request = new Request('http://localhost:3003/generate-report',{
            method:'POST',
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify({clients: reporte})
        })

        fetch(request).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

    }

    return (
      <Fragment>
        


        <div class="square">
        <p>Creemos un Reporte!</p>

        <p>Ingrese la fecha de la que quiere generar un reporte </p>

        <label>
            <input
                type="date"
                placeholder=""
                id="0"
                name="tipo"
                value={date}
                //checked = {"pipi" === selectedOption}
                onChange={e => changedate(e.target.value)}
            />
            
        </label>   

            <button type="submit" onClick={() => onPressBuscar({date})}>
            {'Buscar'}
            </button>

            <Link to={saltoA}>
            <button type="submit" onClick={() => onPressGenerar()}>
            {'Generar'}
            </button>
            </Link>

   
        </div>
      </Fragment>
    );
  } 

  export default GenerarReporte