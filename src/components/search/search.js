import React, {  Fragment } from 'react'
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()
const Search = ({searching}) => {

   /* const dataBasetoLook = "none"

    if (searching === 'song') {
        dataBasetoLook = 'song'
    }

    if (searching === 'album') {
        dataBasetoLook = 'album'
    }

    if (searching === 'artist' ) {
        dataBasetoLook = 'artist'
    }
*/
    const onClick = () => {
        fetch('http://localhost:3001/songs')
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data);
        })
    }

    return (

      <Fragment>
          <h1> search for  {searching}</h1>

          <button className="searchButton" onClick={onClick}>Buscar</button>
      </Fragment>
      
    );
 } 

export default Search
