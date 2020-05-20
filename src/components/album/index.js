import React, { useState, Fragment } from 'react'
import UpdateAlbum from '../update_album/index'
const Album = (props) => {

    const [openEdit, setOpenEdit] = useState([]);

    const onPressEditar = () => {

        console.log(props)
        setOpenEdit([...openEdit, 1])

    }

    const onPressEliminar = () => {

        /*
        console.log("vamos a eliminar una cancion")
        console.log(props)
        const request = new Request('http://localhost:3001/deleteAlbum',{
            method:'POST', 
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify({trackid: props.props.trackid})
          })
          fetch(request).then(res => {
            return res.json()}
          )
          .catch(error => console.error('Error:', error))
          .then(res => {
            console.log('Success:', res)
          }) 

          */
          

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
            
                <button type="submit" onClick={() => onPressEliminar()}>
                    Borrar
                </button>
        
        
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