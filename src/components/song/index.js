import React, { useState, Fragment } from 'react'
import UpdateSong from '../update_song/index'
import './styles.css'
const Song = (props) => {


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
        const request = new Request('http://localhost:3001/deleteSong',{
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
            
                <button type="submit" onClick={() => onPressEliminar()}>
                    Borrar
                </button>
        
        

        
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