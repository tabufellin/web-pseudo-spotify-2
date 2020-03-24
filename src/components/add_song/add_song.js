import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
export const history = createBrowserHistory()
const AddSong = ({ onSubmit }) => {
    const [name, changeName] = useState('');
    const [album, changeAlbum] = useState('');
    const [gender, changeGender] = useState('');
    const [pricePerUnit, changePricePerUnit] = useState('');
    
    const onPress = () => {

      console.log(name, album, gender, pricePerUnit)

      const validateInDataBase = () =>{

          //TODO TO SEE THE NAME IS NOT IN THE DATABASE

          return true
      }

      if (validateInDataBase){
          // TODO TO ADD THE NEW ARTIST



          // AT THE END 
          history.goBack()

      }


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
          placeholder="gender"
          value={gender}
          onChange={e => changeGender(e.target.value)}
        />
        <input
          type="text"
          placeholder="price per unit in $"
          value={pricePerUnit}
          onChange={e => changePricePerUnit(e.target.value)}
        />

        <button type="submit" class='btn btn-primary' onClick={onPress}>
        add
        </button>


      </Fragment>
      
    );

 }
export default AddSong

    