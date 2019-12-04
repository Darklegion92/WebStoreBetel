import React from "react";
import { Carousel } from "react-bootstrap";
import "./styles.css";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle
} from "react-icons/io";

export default function index() {
  return (
    <Carousel
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
    </Carousel>
  );
}
