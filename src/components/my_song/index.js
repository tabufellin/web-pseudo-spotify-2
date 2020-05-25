import React, { useState, Fragment } from 'react'
import UpdateSong from '../update_song/index'
import './styles.css'
import { Link } from 'react-router-dom'
const { uuid } = require('uuidv4');

const MySong = (props) => {

    console.log(props)
    const onClick = () => {
        window.open(props.props.enlace)
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