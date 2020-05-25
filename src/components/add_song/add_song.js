import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
const { uuid } = require('uuidv4');

export const history = createBrowserHistory()

const AddSong = ({ onSubmit }) => {
    const [name, changeName] = useState('');
    const [albumID, changeAlbumID] = useState('');
    const [genre, changeGenre] = useState('');
    const [enlace, changeEnlace] = useState('');
    let pathname = window.location.pathname;
    let largo = pathname.length - 9
    let gobackPath = pathname.substr(0, largo)

    const onPress = () => {

      console.log("test")
      const generatedId = Math.floor(Math.random() * (999999999 - 9999 + 1) ) + 9999;
      const generatedTime = Math.floor(Math.random() * (999999 - 100000 + 1) ) + 9999;
      const idBitacora = uuid()
      const pathname = window.location.pathname;
      const largo = pathname.length 
      const userTail = pathname.substr(6, largo )
      const user = userTail.split("/")[0]

      console.log(generatedId)
      const request = new Request('http://localhost:3001/addSong',{
                method:'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({trackid: generatedId, name:name, albumID:albumID, genre:genre, milliseconds:generatedTime, enlace:enlace, idBitacora: idBitacora, user: user})
            })

      fetch(request).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));

    } 

    return (

      <Fragment>
        <h1> Ingreso de canción </h1>

        <input
          type="text"
          placeholder="nombre"
          value={name}
          onChange={e => changeName(e.target.value)}
        />
        <input
          type="text"
          placeholder="albumID"
          value={albumID}
          onChange={e => changeAlbumID(e.target.value)}
        />
        <input
          type="text"
          placeholder="genre"
          value={genre}
          onChange={e => changeGenre(e.target.value)}
        />

        <input
          type="text"
          placeholder="enlace"
          value={enlace}
          onChange={e => changeEnlace(e.target.value)}
        />

        <Link to={{pathname: gobackPath} }>
           <button type="submit" className='btn btn-primary' onClick={() => onPress(name, albumID, genre)} > add </button>    
        </Link>

      </Fragment>
      
    );

 }
export default AddSong

    