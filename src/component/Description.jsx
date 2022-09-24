import React, { Component } from 'react'

export class Description extends Component {
  render() {
    return (
      <div className="row py-4" >
   
            <h2> Description</h2>
            <p>
              The iPhone 11 boasts a gorgeous all-screen Liquid Retina LCD that
              is water resistant up to 2 metres for up to 30 minutes. Moreover,
              the ultra-wide 13 mm lens has a 120-degree field of view for four
              times more scenes, and the 26 mm wide lens provides up to 100%
              Autofocus in low light.
            </p>
            <ul className="d-flex" style={{gap:"20px"}}>
      <li><button  className="cartbtn">ADD TO CART  <i class="fa-solid fa-cart-shopping"></i></button></li>  
       <li><button className="cartbtn2">BUY NOW  <i class="fa-solid fa-bolt-lightning" ></i></button></li> </ul>
      </div>
    )
  }
}

export default Description
