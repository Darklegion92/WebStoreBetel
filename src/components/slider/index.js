import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./styles.css";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle
} from "react-icons/io";

export default function index() {
  return (
    <Carousel 
    showStatus={false}
    showThumbs={false}
    infiniteLoop={true}
    autoPlay={true} 
    >
      <div>
        <img src="img/slider/01.jpg" />
        
      </div>
      <div>
        <img src="img/slider/02.jpg" />
        
      </div>
      <div>
        <img src="img/slider/03.jpg" />
        
      </div>

      {/* <Carousel
      nextIcon=<IoIosArrowDroprightCircle size="50px" />
      prevIcon=<IoIosArrowDropleftCircle size="50px" />
      fade = "true"
    >
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slider/01.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="img/slider/03.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>*/}
    </Carousel>
  );
}
