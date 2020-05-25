import React, { useState, Fragment } from 'react'
import UpdateSong from '../update_song/index'
import './styles.css'
import { Link } from 'react-router-dom'
const { uuid } = require('uuidv4');

const Song = (props) => {

    const pathname = window.location.pathname;
    const largoA = pathname.length  - 12
    const directA = pathname.substr(0, largoA)


    const [openEdit, setOpenEdit] = useState([]);

    const onPressEditar = () => {
        //const edit = [1]
        console.log(props)
        setOpenEdit([...openEdit, 1])
        console.log("vamos a editar una cancion")
    }


    const onPressEliminar = () => {
        console.log("vamos a eliminar una cancion")
        console.log(props)
        const idBitacora = uuid()
        const pathname = window.location.pathname;
        const largo = pathname.length 
        const userTail = pathname.substr(6, largo )
        const user = userTail.split("/")[0]
        console.log(user)
        
    

        const request = new Request('http://localhost:3001/deleteSong',{
            method:'POST', 
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify({trackid: props.props.trackid, idBitacora, user})
          })
          fetch(request).then(res => {
            return res.json()}
          )
          .catch(error => console.error('Error:', error))
          .then(res => {
            console.log('Success:', res)
          }) 
         

    }

    const onPressComprar = () => {

    }

    
    const View = (propitos) => {

        return(
            <Fragment>
                
    
            <div className='song'>
                <div className='text'>
                    <p> {props.props.name}</p>
                    <p> by {props.props.artistname}</p>
                    <p> {props.props.milliseconds} </p>
                </div>
        

        
        
                <button type="submit" onClick={() => onPressEditar()}>
                    Editar
                </button>

                <Link to={directA}>
                <button type="submit" onClick={() => onPressEliminar()}>
                    Borrar
                </button>         
                </Link>

                <Link to={directA}>
                <button type="submit" onClick={() => onPressComprar()}>
                    Comprar
                </button>         
                </Link> 

        
        

        
            </div>
            
        
        
            </Fragment>

        )
        

    }

    if (openEdit.length > 0) {
        return(
            <Fragment>
                <View propitos={props} />
                {console.log(props)}
                <UpdateSong name={props.props.name}  albumid={props.props.albumid} genreid={props.props.genreid} trackid={props.props.trackid}/>    
            </Fragment>    
        )

        
    }

    return(
        <View propitos={props} />
        

    )



}

//<div key={index}> Song {i.name}, Artist {i.composer}, time {i.milliseconds}  </div>
export default Song