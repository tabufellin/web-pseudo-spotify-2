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

    return (

      <Fragment>
          <h1> search for  {searching}</h1>



      </Fragment>
      
    );
 } 

export default Search
