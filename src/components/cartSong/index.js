import React, { useState, Fragment } from 'react'
import UpdateSong from '../update_song/index'
import './styles.css'
import { Link } from 'react-router-dom'
const { uuid } = require('uuidv4');

const CartSong = (props) => {

    const pathname = window.location.pathname;
    const largoA = pathname.length  - 12
    const directA = pathname.substr(0, largoA)
    console.log(props)


    return(
        <Fragment>

            <div className='song'>
                <div className='text'>
                    <p> {props.props.name}</p>
                    <p> by {props.props.artistname}</p>
                    <p> {props.props.milliseconds} </p>
                    <p> price: $0.99 </p>
                </div>
            </div>
        </Fragment>

    )
}

//<div key={index}> Song {i.name}, Artist {i.composer}, time {i.milliseconds}  </div>
export default CartSong