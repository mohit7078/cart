import React, { Component } from 'react'
import Cart from '../component/Cart'
import Header from '../component/Header'
import Instagram from '../component/Instagram'
import Lenscart from '../component/Lenscart'



export class Home extends Component {
  render() {
    return (
      <>
        <Header/>
        <Cart/> 
        <Instagram/>
       <Lenscart/>
      
      </>
    )
  }
}

export default Home
