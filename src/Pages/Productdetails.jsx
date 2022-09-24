import React, { Component } from "react";
import iphonedetails from "../assets/images/i_details.jpg";
import phoneone from "../assets/images/img11.webp";
import phonetwo from "../assets/images/img22.webp";
import phonethree from "../assets/images/img33.jpeg";
import blackphone from "../assets/images/blackphone.png";
import cameraimg from "../assets/images/cameraimg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link, useParams } from "react-router-dom";
import Hero from "../component/Hero";
import Description from "../component/Description";

const options = {
  autoPlay: true,
  showIndicators: false,
  showThumbs: false,
  loop: true,
};

export class Productdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.product_id,
     
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-1 py-4">
         <Link to ={"/iphone2/"} > <i class="fa-solid fa-xl home fa-house"></i> </Link>
          </div>
          <div className="col-md-11 py-4">
            <h3 className="product_heading">Iphone{this.props.product_id}</h3>
            

            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Carousel {...options}>
              <img src={iphonedetails} className="phoneimg zoom" />
              <img src={blackphone} className="phoneimg zoom" />
              <img src={cameraimg} className="phoneimg zoom" />
            </Carousel>
          </div>
          <div className="col-md-4 phone_diffent_images">
            <ul className="py-2">
              <li>
                <img src={phoneone} />
              </li>
              <li>
                <img src={phonetwo} />
              </li>
              <li>
                <img src={phonethree} />
              </li>
              <li>
                <img src={phoneone} />
              </li>
              <li>
                <img src={phonetwo} />
              </li>
              <li>
                <img src={phonethree} />
              </li>
              <li>
                <img src={phoneone} />
              </li>
              <li>
                <img src={phonetwo} />
              </li>
              <li>
                <img src={phonethree} />
              </li>
              <li>
                <img src={phoneone} />
              </li>
              <li>
                <img src={phonetwo} />
              </li>
              <li>
                <img src={phonethree} />
              </li>
            </ul>
          </div>
        </div>
        <div className="row row_design">
          <div className="col-md-12 ">
            <h3 style={{ padding: "10px" }} border border-dark>
              Dazzling Design
            </h3>
            <p>
              This phone boasts a gorgeous all-screen Liquid Retina LCD that is
              water resistant up to 2 metres for up to 30 minutes.
            </p>

            <div className="cost"> Cost = $250</div>
            <>
              <Description />{" "}
            </>
          </div>
        </div>
        <div className="row">
          <h1>Specifications</h1>
        </div>
        <div className="py-4">
          {" "}
          <Hero />
        </div>

        <div className="row single_product_row3">
          <h2 class="font-md mb-2">Ixhone </h2>
          <h6 class="font-sm  mb-2 text-bold">Order-ID: WD-1663762222</h6>
          <h6 class="font-sm  mb-2">Date:Wed, Sep 21, 2022 5:36 AM</h6>
          <span class=" font-sm">
            Paid: <span class="font-sm">1890</span>
          </span>
          <hr />
          <div class="bottom-content" style={{textAlign:"Right"}}>
            
              View Order <Link to ={"/iphone2/"}> <button  className="cartbtn2">Cancel Order  <i class="fa-solid fa-bolt-lightning" ></i></button></Link>
            
        
      
          </div>
        </div>
        
      </div>
    );
  }
}

export default (props) => <Productdetails {...useParams()} {...props} />;
