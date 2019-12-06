import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./styles.css";

export default function index() {
  return (
    <Carousel
      showArrows={false}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      autoPlay={true}
      transitionTime={1000}
    >
      <div>
        <img src="img/slider/01.jpg" alt="imagen"/>
      </div>
      <div>
        <img src="img/slider/02.jpg" alt="imagen"/>
      </div>
      <div>
        <img src="img/slider/03.jpg" alt="imagen"/>
      </div>
    </Carousel>
  );
}

/* <Carousel
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
    </Carousel>*/
