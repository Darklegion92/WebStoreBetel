import React, { Component } from "react";
import ItemsCarousel from "react-items-carousel";
import styled from "styled-components";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from "react-icons/io";
import { WrapperConsumer } from "../../store";
import "./styles.css";

class slider extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.context.imageSlider !== this.props.context.imageSlider;
  }

  render() {
    const Wrapper = styled.div`
      padding: 0 0px;
      margin: 0 auto;
    `;
    const {
      activeItemIndex,
      setActiveItemIndex,
      imageSlider
    } = this.props.context;
    return (
      <Wrapper>
        <ItemsCarousel
          infiniteLoop
          gutter={20}
          numberOfCards={1}
          activeItemIndex={activeItemIndex}
          requestToChangeActive={setActiveItemIndex}
          leftChevron={
            <IoIosArrowDropleftCircle
              size="50"
              color="rgba(124, 122, 122, 0.486)"
            />
          }
          rightChevron={
            <IoIosArrowDroprightCircle
              size="50"
              color="rgba(124, 122, 122, 0.486)"
            />
          }
        >
          {imageSlider.map(item => {
            return (
              <a href={item.urlSlider}>
                <img
                  className="d-block w-100"
                  src={item.imgSlider}
                  alt={item.nombreSlider}
                />
              </a>
            );
          })}
        </ItemsCarousel>
      </Wrapper>
    );
  }
}
export default WrapperConsumer(slider);
