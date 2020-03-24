import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
import './styles.css'
export const history = createBrowserHistory()


const AddAlbum = ({ onSubmit }) => {
    const [title, changeTitle] = useState('');
    const [artist, changeArtist] = useState('');

    const onPress = () => {

      console.log(changeTitle, changeArtist)

      const validateInDataBase = () =>{

          //TODO TO SEE THE NAME IS NOT IN THE DATABASE THAT THE ARTIST EXIST

          return true
      }

      if (validateInDataBase){
          // TODO TO ADD ALBUM 



          // AT THE END 
          history.goBack()

      }


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


        <button type="submit" className='btn btn-primary' onClick={onPress}>
        add
        </button>


      </div>
      
    );

 }
export default AddAlbum
