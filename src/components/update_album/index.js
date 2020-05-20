import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom';
export const history = createBrowserHistory()
var pathname = window.location.pathname;
let saltoA = pathname.substr(0, pathname.length -  12)  + 1


const UpdateAlbum = (props) => {
    const [name, changeName] = useState('');
    const [artistid, changeArtistId] = useState('');
    const valueName = "nombre actual: " + props.props.props.title
    const valueartistid = "actual artist id: " + props.props.props.artistid

    var pathname = window.location.pathname;
    const largo = pathname.length - 13
    let saltoA = pathname.substr(0, largo)
    
    const onPress = () => {
        console.log(props)
      // TODO PARA QUE UPDATE ALBUM
      //UPDATE album SET title = $1 , artistid = $2 WHERE albumid = $3
      const request = new Request('http://localhost:3001/UpdateAlbum',{
        method:'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify({ title: name, artistid: artistid, albumid: props.props.props.albumid})
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
        <h1> Vamos a modificar un album! </h1>

        <input
          type="text"
          placeholder = {valueName}
          value ={name}
          onChange={e => changeName(e.target.value)}
        />
        
        <input
          type="text"
          placeholder = {valueartistid}
          value ={artistid}
          onChange={e => changeArtistId(e.target.value)}
        />



        <Link to={saltoA}>
        <button type="submit" className='btn btn-primary' onClick={() => onPress()}>
        Guardar cambios
        </button>
        </Link>

      </Fragment>
      
    );

 }
export default UpdateAlbum
