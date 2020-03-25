import React, {  Fragment } from 'react'
import NavActions from '../NavActions/nav_actions'


const Query1 = ({list = []}) => {
/* 
    list.length === 0 ? (
        <h1>
            {'nel'}
        </h1>
    ) : (
        list.map( (artista, index) => 
        <h1 key={index}>hol {artista.name}</h1>
        )
    )
*/
    return (

      <Fragment>
               
        {   list.length === 0 ? (
                <h1>
                    {'nel'}
                </h1>
            ) : (
                list.map( (artista, index) => 
                <h1 key={index}>hol {artista.name}</h1>
                )
            )}

      </Fragment>
      
    );
  } 


export default Query1
