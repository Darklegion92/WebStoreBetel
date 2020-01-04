import React, { Component } from "react";
import ItemsCarousel from "react-items-carousel";
import styled from "styled-components";
import {Link} from 'react-router-dom'
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle
} from "react-icons/io";
import { WrapperConsumer, ActionsTypes} from "../../store";
import CONSTANTES from '../../config/CONSTANTES'
import "./styles.css";

class slider extends Component {
 shouldComponentUpdate(nextProps, nextState) {
    return nextProps.context.imageSlider !== this.props.context.imageSlider ||
    nextProps.context.activeItemIndex !== this.props.context.activeItemIndex;
  }

  render() {
    const {valorFiltro} = this.props.context
    const Wrapper = styled.div`
      padding: 0 0px;
      margin: 0 auto;
    `;
    const {
      activeItemIndex,
      dispatch,
      imageSlider
    } = this.props.context;
    return (
      <Wrapper>
        <ItemsCarousel
          infiniteLoop
          gutter={20}
          numberOfCards={1}
          activeItemIndex={activeItemIndex}
          requestToChangeActive={e=>dispatch({type:ActionsTypes.setActiveItemIndex,value:e})}
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
              <Link to={`${item.urlSlider}/${valorFiltro}`}>
                <img
                  className="d-block w-100"
                  src={CONSTANTES.APIREST+"/"+item.imgSlider}
                  alt={item.nombreSlider}
                />
              </Link>
            );
          })}
        </ItemsCarousel>
      </Wrapper>
    );
  }
}
export default WrapperConsumer(slider);
