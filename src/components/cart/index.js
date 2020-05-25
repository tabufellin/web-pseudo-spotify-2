import React, { useState, Fragment } from 'react'
import { createBrowserHistory } from 'history'
import CartSong from '../cartSong/index'
const { uuid } = require('uuidv4');

export const history = createBrowserHistory()

const Cart = ({searching}) => {
    const [listSong, setListSong] = useState([]);
    const [billingAddress, changeBillingAddress] = useState('');
    const [billingCity, changeBillingCity] = useState('');
    const [billingState, changeBillingState] = useState('');
    const [billingCountry, changeBillingCountry] = useState('');
    const [billingPostalcode, changeBillingPostalcode] = useState('');
    const valueBillingAddress = "BillingAddress"
    const valueBillingCity = "BillingCity"
    const valueBillingState = "BillingState"
    const valueBillingCountry = "BillingCountry"
    const valueBillingPostalcode = "BillingPostalcode"

    const pathname = window.location.pathname;
    const largo = pathname.length 
    var called = 0 
    const userTail = pathname.substr(6, largo )
    const user = userTail.split("/")[0]
    const generatedId = Math.floor(Math.random() * (999999999 - 9999 + 1) ) + 9999;

    if(called === 0){
      const request = new Request('http://localhost:3001/cart',{
          method:'POST',
          headers: { 'Content-Type':'application/json'},
          body: JSON.stringify({userid:user})
      })

      fetch(request).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
          // console.log('Success:', response)
          listSong.length = 0
          setListSong([...listSong, ...response])
          called++
      }); 
    } 
    
    const onPressBuyCart = () => {

      const idBitacora = uuid()
      const pathname = window.location.pathname;
      const largo = pathname.length 
      const userTail = pathname.substr(6, largo )
      const user = userTail.split("/")[0]
      console.log(user)

      const request = new Request('http://localhost:3001/buyCart',{
          method:'POST', 
          headers: { 'Content-Type':'application/json'},
          body: JSON.stringify({invoiceid: generatedId, customerid: user, billingAddress: billingAddress, billingCity: billingCity, billingState: billingState, billingCountry: billingCountry, billingPostalcode: billingPostalcode, total:(listSong.length*0.99),idBitacora: idBitacora})
        })
        fetch(request).then(res => {
          return res.json()}
        )
        .catch(error => console.error('Error:', error))
        .then(res => {
          console.log('Success:', res)
        })
  } 

    return (

      <Fragment>
        <h1>Este es el carrito! </h1>
        <h2>{user}</h2>
        <div> 
            {listSong.map((i, index) => {
              console.log(i)

              return((<CartSong key={index} props={i}/>))
              })}
        </div>
        <h3>Total: ${(listSong.length * 0.99).toFixed(2)}</h3>

        <h1> Llenar los datos para su compra </h1>

        <input
          type="text"
          placeholder = {valueBillingAddress}
          value ={billingAddress}
          onChange={e => changeBillingAddress(e.target.value)}
        />
        
        <input
          type="text"
          placeholder = {valueBillingCity}
          value ={billingCity}
          onChange={e => changeBillingCity(e.target.value)}
        />

        <input
          type="text"
          placeholder = {valueBillingState}
          value = {billingState}
          onChange={e => changeBillingState(e.target.value)}
        />
        <input
          type="text"
          placeholder = {valueBillingCountry}
          value = {billingCountry}
          onChange={e => changeBillingCountry(e.target.value)}
        />
        <input
          type="text"
          placeholder = {valueBillingPostalcode}
          value = {billingPostalcode}
          onChange={e => changeBillingPostalcode(e.target.value)}
        />

        <button type="submit" onClick={() => onPressBuyCart()}>
            Checkout
        </button> 

        
      </Fragment>
      
      
    );
 }   


export default Cart
