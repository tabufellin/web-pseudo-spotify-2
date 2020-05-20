import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import './styles.css' 
const { uuid } = require('uuidv4');

export const history = createBrowserHistory()
const AddArtist = ({ onSubmit }) => {
    const [userName, changeUserName] = useState('');
    let pathname = window.location.pathname;
    let largo = pathname.length - 11
    let gobackPath = pathname.substr(0, largo)

    const onPress = () => {

      console.log("test")
      const generatedId = Math.floor(Math.random() * (999999999 - 9999 + 1) ) + 9999;
      const idBitacora = uuid()
      const pathname = window.location.pathname;
      const largo = pathname.length 
      const userTail = pathname.substr(6, largo )
      const user = userTail.split("/")[0]

      const request = new Request('http://localhost:3001/addArtist',{
                method:'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({artistid: generatedId,userName:userName, idBitacora: idBitacora, user:user})
            })

      fetch(request).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    }

    


    return (

      <Fragment>
        <h1>Ingreso de nuevo artista</h1>

        <input
          type="text"
          placeholder="Nombre artistico"
          value={userName}
          onChange={e => changeUserName(e.target.value)}
        />


        <Link to={{pathname: gobackPath} }>
        <button type="submit" className='btn btn-primary' onClick={onPress}>
        add
        </button>
        </Link>

      </Fragment>
      
    );

 }
export default AddArtist

    