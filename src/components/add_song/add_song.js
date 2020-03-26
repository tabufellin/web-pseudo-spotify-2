import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
export const history = createBrowserHistory()
const AddSong = ({ onSubmit }) => {
    const [name, changeName] = useState('');
    const [album, changeAlbum] = useState('');
    const [genre, changeGenre] = useState('');
    
    const onPress = (name, album, genre) => {

      console.log("test")

      const request = new Request('http://localhost:3001/addSong',{
                method:'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({name:name, album:album, genre:genre})
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
          placeholder="album"
          value={album}
          onChange={e => changeAlbum(e.target.value)}
        />
        <input
          type="text"
          placeholder="genre"
          value={genre}
          onChange={e => changeGenre(e.target.value)}
        />

        <button type="submit" className='btn btn-primary' onClick={() => onPress(name, album, genre)}>
        add
        </button>


      </Fragment>
      
    );

 }
export default AddSong

    