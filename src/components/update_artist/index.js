import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import {withRouter} from 'react-router-dom';
import { Link } from 'react-router-dom'
export const history = createBrowserHistory()
var pathname = window.location.pathname;
let saltoA = pathname.substr(0, pathname.length -  12)  + 1
const { uuid } = require('uuidv4');


const UpdateArtist = (props) => {

    const [name, changeName] = useState('');
    const valueName = "nombre actual: " + props.props.props.name

    var pathname = window.location.pathname;
    const largo = pathname.length - 14
    let saltoA = pathname.substr(0, largo)
    
    const onPress = () => {

      const idBitacora = uuid()
      const pathname = window.location.pathname;
      const largo = pathname.length 
      const userTail = pathname.substr(6, largo )
      const user = userTail.split("/")[0]
      console.log(user)

      
      console.log("vamos a editar un artista")
      console.log(props)
      const request = new Request('http://localhost:3001/updateArtist',{
          method:'POST', 
          headers: { 'Content-Type':'application/json'},
          body: JSON.stringify({name: name, artistid: props.props.props.artistid, idBitacora, user})
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
        <h1> Vamos a modificar un artista! </h1>

        <input
          type="text"
          placeholder = {valueName}
          value ={name}
          onChange={e => changeName(e.target.value)}
        />

        <Link to={saltoA}>
        <button type="submit" className='btn btn-primary' onClick={() => onPress()}>
        Guardar cambios
        </button>
        </Link>

      </Fragment>
      
    );

 }
export default UpdateArtist
