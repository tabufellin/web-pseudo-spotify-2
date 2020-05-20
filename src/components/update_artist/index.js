import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom';
export const history = createBrowserHistory()
var pathname = window.location.pathname;
let saltoA = pathname.substr(0, pathname.length -  12)  + 1


const UpdateArtist = (props) => {

    const [name, changeName] = useState('');
    const valueName = "nombre actual: " + props.props.props.name

    var pathname = window.location.pathname;
    const largo = pathname.length - 14
    let saltoA = pathname.substr(0, largo)
    
    const onPress = () => {
      // TODO PARA QUE UPDATE SONG
      console.log(props)
      console.log("estos son los props" + props)


      /*const request = new Request('http://localhost:3001/UpdateArtist',{
        method:'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify({ name: name, albumid: albumID,  genreid: genre, trackid: props.trackid})
      })
      fetch(request).then(res => {
        return res.json()}
      )
      .catch(error => console.error('Error:', error))
      .then(res => {
        console.log('Success:', res)
      }) */

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
