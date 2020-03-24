import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import { Link } from 'react-router-dom'
export const history = createBrowserHistory()
const AddArtist = ({ onSubmit }) => {
    const [userName, changeUserName] = useState('');

    const onPress = () => {

      console.log(userName)

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
        <h1>Ingreso de nuevo artista</h1>

        <input
          type="text"
          placeholder="Nombre artistico"
          value={userName}
          onChange={e => changeUserName(e.target.value)}
        />

        <button type="submit" class='btn btn-primary' onClick={onPress}>
        add
        </button>


      </Fragment>
      
    );

 }
export default AddArtist

    