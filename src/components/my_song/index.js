import React, { useState, Fragment } from 'react'
import UpdateSong from '../update_song/index'
import './styles.css'
import { Link } from 'react-router-dom'
const { uuid } = require('uuidv4');

const MySong = (props) => {

    console.log(props)
    const onClick = () => {
        window.open(props.props.enlace)
        const idBitacora = uuid()
        const pathname = window.location.pathname;
        const largo = pathname.length 
        const userTail = pathname.substr(6, largo )
        const user = userTail.split("/")[0]
        const request = new Request('http://localhost:3001/playSong',{
            method:'POST', 
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify({idBitacora: idBitacora, user: user, trackid: props.props.trackid})
          })
          fetch(request).then(res => {
            return res.json()}
          )
          .catch(error => console.error('Error:', error))
          .then(res => {
            console.log('Success:', res)
          }) 
    }

    return(
        <Fragment>

            <div className='song'>
                <div className='text'>
                    <p> {props.props.trackname}</p>
                    <p> by {props.props.artistname}</p>
                    <p> {props.props.milliseconds} </p>

                    <button onClick={() => onClick()}>
                        Play
                    </button> 
                </div>
            </div>
        </Fragment>

    )
}

//<div key={index}> Song {i.name}, Artist {i.composer}, time {i.milliseconds}  </div>
export default MySong