import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import './styles.css'
import { isDOMComponent } from 'react-dom/test-utils'
const { uuid } = require('uuidv4');

export const history = createBrowserHistory()

const AddAlbum = ({ onSubmit }) => {
    const [title, changeTitle] = useState('');
    const [artist, changeArtist] = useState('');
    let pathname = window.location.pathname;
    let largo = pathname.length - 10
    let gobackPath = pathname.substr(0, largo)

    const onPress = () => {

      console.log("test")
      const generatedId = Math.floor(Math.random() * (999999999 - 9999 + 1) ) + 9999;
      const idBitacora = uuid()
      const pathname = window.location.pathname;
      const largo = pathname.length 
      const userTail = pathname.substr(6, largo )
      const user = userTail.split("/")[0]

      const request = new Request('http://localhost:3001/addAlbum',{
                method:'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({albumid: generatedId,title:title,artist: artist, idBitacora: idBitacora, user: user})
            })

      fetch(request).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response));
    } 

    return (

      <div>
        <h1>Ingreso de nuevo Album</h1>

        <input
          type="text"
          placeholder="Titulo del album"
          value={title}
          onChange={e => changeTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Artista"
          value={artist}
          onChange={e => changeArtist(e.target.value)}
        />

        <Link to={{pathname: gobackPath} }>
        <button type="submit" className='btn btn-primary' onClick={onPress}>
        add
        </button>
        </Link>



      </div>
      
    );

 }
export default AddAlbum
