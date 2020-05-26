import React, { useState, Fragment } from 'react';
import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
const { uuid } = require('uuidv4');

 //NOT DONE
const SimulateSales = ({ onSubmit }) => {
    const [date, changeDate]=useState('')
    const [cant, changeCant]=useState('')
    const idBitacora = uuid()
    const pathname = window.location.pathname;
    const largo = pathname.length 
    const userTail = pathname.substr(6, largo )
    const user = userTail.split("/")[0]
    const generatedId = Math.floor(Math.random() * (999999999 - 9999 + 1) ) + 9999;

    const onPressSimulate = () => {
      const request = new Request('http://localhost:3001/simulateSales',{
        method:'POST', 
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify({invoiceid: generatedId, userid: user, date: date, cant: cant, idBitacora: idBitacora})
      })
      fetch(request).then(res => {
        return res.json()}
      )
      .catch(error => console.error('Error:', error))
      .then(res => {
        console.log('Success:', res)
      }) 
    }

    return (
      <Fragment>
        <div class="square">
          <p>Generar ventas</p>
  
          <label>
              <input
                  type="date"
                  placeholder="Fecha"
                  value={date}
                  onChange={e => changeDate(e.target.value)}
              />
              <input
                  type="numeric"
                  placeholder="Cantidad de canciones"
                  value={cant}
                  onChange={e => changeCant(e.target.value)}
              />
          </label> 



              <button type="submit" onClick={() => onPressSimulate(date, cant)}>
              {'Simulate Sales!'}
              </button>
  
        </div>
      </Fragment>
    );
  } 

  export default SimulateSales