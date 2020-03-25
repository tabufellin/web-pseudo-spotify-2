import React, {  Fragment } from 'react'
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()
const Search = ({searching}) => {

   /* const dataBasetoLook = "none"*/

    const onClick = () => {
        if (searching === 'song') {
            fetch('http://localhost:3001/songs')
            .then(function(response) {
                return (response.json());
            })
            .then(function(data) {
                console.log(data);
            })
        }

        if (searching === 'album') {
            fetch('http://localhost:3001/album')
            .then(function(response) {
                return (response.json());
            })
            .then(function(data) {
                console.log(data);
            })
        }

        if (searching === 'artist' ) {
            fetch('http://localhost:3001/artist')
            .then(function(response) {
                return (response.json());
            })
            .then(function(data) {
                console.log(data);
            })
        }


        
    }

    return (

      <Fragment>
          <h1> search for  {searching}</h1>

          <button className="searchButton" onClick={onClick}>Buscar</button>
      </Fragment>
      
    );
 } 

export default Search
