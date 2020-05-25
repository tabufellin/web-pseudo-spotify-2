import React, { useState, Fragment } from 'react';

import {withRouter} from 'react-router-dom'
import { Link } from 'react-router-dom'
 //NOT DONE
const GenerarRecomendaciones = ({ onSubmit }) => {
    const [reporte, setReporte] = useState('')
    const [clients, setClients]=useState([])
    const [genres, setGenres] = useState([])
    const [recomendacion, setRecomendacion] = useState([])
    var pathname = window.location.pathname;
    const largo = pathname.length - 24
    let saltoA = pathname.substr(0, largo)
 /*   if (clients.length !== 0 && genres.length !== 0 && bandera === false) {
        bandera = true
        console.log('Vamos a crear reporte')
        genres.map(
            (genre, index) => {
                genre.cuantas.map((cuantas, index) => {
                    const request = new Request('http://localhost:3001/get-random-of-certain-genre',{
                        method:'POST',
                        headers: { 'Content-Type':'application/json'},
                        body: JSON.stringify({genreid: genre.genreid ,cuantos:cuantas})
                      })
                      fetch(request).then(res => {
                        return res.json()}
                      )
                      .catch(error => console.error('Error:', error))
                      .then(res => {
                        console.log('Success:', res)
            
                        if (res.length > 0) {
                            console.log(res)
                            setRecomendacion([...recomendacion, ...res])
                             console.log(res)
                        } 
                      }) 

                })
            }
        )
        

    }*/

    

    const onPressBuscar = () => {
    
        console.log('entre aqui') 

        fetch('http://localhost:3001/clients')
        .then(function(response) {
            return (response.json());
        })
        .then(function(data) {
            console.log(data) 
           // clients.length = 0
            setClients([...clients, ...data])
            console.log("estos son lso clientes")
            console.log(setClients)
            return clients 
          //  }
                      
        })
        .then( (clients) =>{
            console.log(clients)
            fetch('http://localhost:3001/last-genres')
            .then(function(response) {
                return (response.json());
            })
            .then(function(data) {
                console.log(data) 

               // genres.length = 0
                setGenres([...genres, ...data])
                console.log(genres)


              //  }                      
            })

        })




/*

        )
        new Promise(displayDataDBGet('http://localhost:3001/clients', clients, setClients))
            .then( clients => {
                console.log(clients)
                return displayDataDBGet('http://localhost:3001/last-genres', genres, setGenres)

            })
            .then(genres => {
                console.log(genres)
            })
            .catch(err => console.log(err))

       */ 


    }

    const onPressGenerar = (genres) => {
        if (clients.length !== 0 && genres.length !== 0) {
            console.log('Vamos a crear reporte')
            console.log(genres.genres)
            console.log(clients)
            for (var i in genres.genres) {
                console.log('agregando biiii')
                const genreid = genres.genres[i].genreid
                console.log('este es el genre id' + genreid)
                const cuantas = genres.genres[i].cuantas
                console.log('estas son cuantas' + cuantas)
                const request = new Request('http://localhost:3001/get-random-of-certain-genre',{
                    method:'POST',
                    headers: { 'Content-Type':'application/json'},
                    body: JSON.stringify({genreid: genreid ,cuantas:cuantas})
                  })
                  fetch(request).then(res => {
                    return res.json()}
                  )
                  .catch(error => console.error('Error:', error))
                  .then(res => {
                    console.log('Success:', res)
                    setRecomendacion([...recomendacion, ...res])

                    

                  }) 

            }
            
    
        }
    }

    const onPressGenerarReporte = () => {
        let reporte = []
        for (var i in clients) {
            console.log("vamos a crear reporte")
            const client = clients[i]
            console.log(client.userid)
            const a = {
                id: client.userid
                ,
                trackRecomendadas: recomendacion     

            }   
            console.log(a) 
            reporte = [...reporte, a]
        }
        console.log('termino el ciclo y este es el resultado')
        console.log(reporte)
       // data = []

       const request = new Request('http://localhost:3003/generate-recomendations',{
            method:'POST',
            headers: { 'Content-Type':'application/json'},
            body: JSON.stringify({reporte: reporte})
        })
        fetch(request).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

    }

    return (
      <Fragment>
        


        <div class="square">
        <p>Creemos Recomendaciones para ciertos clientes !</p>

        <p>Ingrese la fecha de la que quiere generar un reporte </p>
        
            <button type="submit" onClick={() => onPressBuscar()}>
            {'Usuarios a los que le va a recomendar'}
            </button>
            {clients.map((i, index) => <div> {i.username}</div>)}

            <button type="submit" onClick={() => onPressGenerar({genres})}>
            {'Canciones que les va a recomendar'}
            </button>
            {recomendacion.map((i, index) => <div> {i.trackid}</div>)}

            <Link to={saltoA}>
            <button type="submit" onClick={() => onPressGenerarReporte()}>
            {'Generar reporte'}
            </button>
            </Link>

   
        </div>
      </Fragment>
    );
  } 

  export default GenerarRecomendaciones