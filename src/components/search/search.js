import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import Song from '../song/index'
import Album from '../album/index'
import Artist from '../artist/index'
export const history = createBrowserHistory()
const Search = ({searching}) => {
    const [listSong, setListSong] = useState([])
    const [listArtist, setListArtist] = useState([])
    const [listAlbum, setListAlbum] = useState([])
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
            .then(response => {
                console.log('Success:', response)
                listSong.length = 0
                setListSong([...listSong, ...response]) 
            });


        }

        if (searching === 'album') {
            const request = new Request('http://localhost:3001/album',{
                method:'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({search:search})
            })

            fetch(request).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response)
                listAlbum.length = 0
                setListAlbum([...listAlbum, ...response]) 
            });
        }

        if (searching === 'artist' ) {
            const request = new Request('http://localhost:3001/artist',{
                method:'POST',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify({search:search})
            })

            fetch(request).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                console.log('Success:', response)
                listArtist.length = 0
                setListArtist([...listArtist, ...response]) 
            });
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
        <div> 
            {listSong.map((i, index) => (<Song key={index} props={i} />))}
        </div>


        <div>
            {listAlbum.map((i, index) => ( <Album key={index} props={i} />))}    
        </div> 
          
           {/* <div key={index}> titulo: {i.title}, albumid {i.albumid}, artistid {i.artistid}  </div>))}</p>}*/}

        <div>
            {listArtist.map((i, index) =>(<Artist key={index} props={i} />) )}
        </div>
      </Fragment>
      
    );
 } 

export default Search


const request = new Request('http://localhost:3001/deleteSong',{
        method:'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify({id:props.id})
    })

    fetch(request).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        console.log('Success:', response)
    });