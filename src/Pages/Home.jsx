import React, { Component } from 'react'
import Cart from '../component/Cart'
import Header from '../component/Header'
import Instagram from '../component/Instagram'

export class Home extends Component {
  render() {
    return (
      <>
        <Header/>
        {/* <Cart/> */}
        <Instagram/>
      </>
    )
  }
}

export default Home
