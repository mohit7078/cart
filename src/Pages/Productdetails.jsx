import React, { Component } from "react";
import iphonedetails from "../assets/images/i_details.jpg";
import phoneone from "../assets/images/img11.webp";
import phonetwo from "../assets/images/img22.webp";
import phonethree from "../assets/images/img33.jpeg";
import blackphone from "../assets/images/blackphone.png";
import cameraimg from "../assets/images/cameraimg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link,useParams } from "react-router-dom";
import Hero from "../component/Hero";
import Description from "../component/Description"

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
         <i class="fa-solid fa-xl home fa-house"></i>
          </div>
          <div className="col-md-11 py-4">
            <h3 className="product_heading">Product Information</h3>

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
           <Description/> </>
          </div>
        </div>
        <div className="row">
          <h1>Specifications</h1>

         
        </div>
        <div
        className="py-4"> <Hero/></div>
       
      </div>
    );
  }
}

export default (props) => <Productdetails {...useParams()} {...props} />;
