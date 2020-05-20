import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import {withRouter} from 'react-router-dom';
export const history = createBrowserHistory()
var pathname = window.location.pathname;
let saltoA = pathname.substr(0, pathname.length -  12)  + 1


const UpdateSong = (props) => {
    const [name, changeName] = useState('');
    const [albumID, changeAlbumID] = useState('');
    const [genre, changeGenre] = useState('');
    const valueName = "nombre actual: " + props.name
    const valueAlbumId = "actual album id: " + props.albumid
    const valueGenreId = "actual genre id: " + props.genreid
    var pathname = window.location.pathname;
    const largo = pathname.length - 12
    let saltoA = pathname.substr(0, largo)
    
    const onPress = () => {
      // TODO PARA QUE UPDATE SONG
      console.log("props:")
      console.log(props)
      console.log(history);

      const request = new Request('http://localhost:3001/updateSong',{
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
      }) 

    } 

    return (

      <Fragment>
        <h1> Ingreso de canción </h1>

        <input
          type="text"
          placeholder = {valueName}
          value ={name}
          onChange={e => changeName(e.target.value)}
        />
        
        <input
          type="text"
          placeholder = {valueAlbumId}
          value ={albumID}
          onChange={e => changeAlbumID(e.target.value)}
        />

        <input
          type="text"
          placeholder = {valueGenreId}
          value = {genre}
          onChange={e => changeGenre(e.target.value)}
        />

        <Link to={saltoA}>
        <button type="submit" className='btn btn-primary' onClick={() => onPress()}>
        Guardar cambios
        </button>
        </Link>

      </Fragment>
      
    );

 }
export default UpdateSong

    