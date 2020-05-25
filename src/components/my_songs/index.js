import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import MySong from '../my_song/index'
const { uuid } = require('uuidv4');

export const history = createBrowserHistory()

const MySongs = ({searching}) => {
    const [listSong, setListSong] = useState([]);

    const pathname = window.location.pathname;
    const largo = pathname.length 
    const userTail = pathname.substr(6, largo )
    const user = userTail.split("/")[0]

    const request = new Request('http://localhost:3001/mySongs',{
        method:'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify({userid:user})
    })

    fetch(request).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => {
        // console.log('Success:', response)
        listSong.length = 0
        setListSong([...listSong, ...response])
    }); 
  

  return (

    <Fragment>
      <h1>Estas son mis canciones! </h1>
      <h2>{user}</h2>
      <div> 
          {listSong.map((i, index) => {
            // console.log(i)

            return((<MySong key={index} props={i}/>))
            })}
      </div>
      
    </Fragment>
    
    
  );   

}
export default MySongs
