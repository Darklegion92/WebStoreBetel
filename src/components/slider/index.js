import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import styled from 'styled-components';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from "react-icons/io";
import "./styles.css";

export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const Wrapper = styled.div`
  padding: 0 0px;
  margin: 0 auto;
`;

  return (
    <Wrapper>
      <ItemsCarousel
        infiniteLoop
        gutter={12}
        numberOfCards={1}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={setActiveItemIndex}
        leftChevron={<IoIosArrowDropleftCircle size="50" color="rgba(124, 122, 122, 0.486)"/>}
        rightChevron={<IoIosArrowDroprightCircle  size="50" color="rgba(124, 122, 122, 0.486)"/>}
      
      >
        <div style={{ height: 335, background: "#EEE" }}>
          <img
            className="d-block w-100"
            src="img/slider/01.jpg"
            alt="First slide"
          />
        </div>
        <div style={{ height: 335, background: "#EEE" }}>
          <img
            className="d-block w-100"
            src="img/slider/02.jpg"
            alt="First slide"
          />
        </div>
        <div style={{ height: 335, background: "#EEE" }}>
          <img
            className="d-block w-100"
            src="img/slider/04.jpg"
            alt="First slide"
          />
        </div>
        <div style={{ height: 335, background: "#EEE" }}>
          <img
            className="d-block w-100"
            src="img/slider/04.jpg"
            alt="First slide"
          />
        </div>
      </ItemsCarousel>
    </Wrapper>
  );
};

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
