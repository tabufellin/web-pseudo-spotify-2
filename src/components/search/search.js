import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
export const history = createBrowserHistory()
const Search = ({searching}) => {
    const [search, changeSearch] = useState('');

   /* const dataBasetoLook = "none"*/

    const onClick = (search) => {

        if (searching === 'song') {
            const request = new Request('http://localhost:3001/song',{
                method:'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({search:search})
            })

            fetch(request).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        }

        if (searching === 'album') {
            const request = new Request('http://localhost:3001/album',{
                method:'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({search:search})
            })

            fetch(request).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        }

        if (searching === 'artist' ) {
            const request = new Request('http://localhost:3001/artist',{
                method:'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({search:search})
            })

            fetch(request).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
        }


        
    }

    return (

      <Fragment>
          <h1> search for  {searching}</h1>
          <input
          type="text"
          placeholder="búsqueda"
          value={search}
          onChange={e => changeSearch(e.target.value)}
        />
          <button className="searchButton" onClick={() => onClick(search)}>Buscar</button>
      </Fragment>
      
    );
 } 

export default Search
