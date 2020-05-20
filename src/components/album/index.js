import React, { useState, Fragment } from 'react'
import UpdateAlbum from '../update_album/index'
import { Link } from 'react-router-dom'
const { uuid } = require('uuidv4');
const Album = (props) => {

    const [openEdit, setOpenEdit] = useState([]);
    const pathname = window.location.pathname;
    const largoA = pathname.length  - 13
    const directA = pathname.substr(0, largoA)

    const onPressEditar = () => {

        console.log(props)
        setOpenEdit([...openEdit, 1])


    }

    const onPressEliminar = () => {

        const idBitacora = uuid()
        const pathname = window.location.pathname;
        const largo = pathname.length 
        const userTail = pathname.substr(6, largo )
        const user = userTail.split("/")[0]
        console.log(user)

        
        console.log("vamos a eliminar una cancion")
        console.log(props)
        const request = new Request('http://localhost:3001/deleteAlbum',{
            method:'POST', 
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify({albumid: props.props.albumid, idBitacora, user})
          })
          fetch(request).then(res => {
            return res.json()}
          )
          .catch(error => console.error('Error:', error))
          .then(res => {
            console.log('Success:', res)
          }) 

          
          

    }

    const View = (propitos) => {

        return(
            <Fragment>
                
    
            <div>
                <div>
                    <p> {props.props.title}</p>
                    <p> {props.props.albumid} </p>
                    <p> by {props.props.artistid}</p>
                </div>
        
                <div>
        
        
                <button type="submit" onClick={() => onPressEditar()}>
                    Editar
                </button>
            
                <Link to={directA}>
                <button type="submit" onClick={() => onPressEliminar()}>
                    Borrar
                </button>         
                </Link>
        
        
                </div>
        
            </div>    
            </Fragment>

        )
        

    }

    if (openEdit.length > 0) {
        return(
            <Fragment>
                <View propitos={props} />
                {console.log(props)}
                <UpdateAlbum props={props}/>  
            </Fragment>    
        )
    }

    return(
        <View propitos={props} />
    )
}

//<div key={index}> Album {i.name}, Artist {i.composer}, time {i.milliseconds}  </div>
export default Album