import React, { Fragment } from 'react'
import { createBrowserHistory } from 'history'
import NavAAS from '../NavAAS/navass'
export const history = createBrowserHistory()

const Search = ({path}) => {
    const actualPath = path
    console.log(actualPath)

    return (

      <Fragment>
          <NavAAS path={actualPath}></NavAAS>

      </Fragment>
      
    );
  } 


export default Search
