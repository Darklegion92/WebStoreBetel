import React, { Component } from "react";
import { Image } from "react-bootstrap";
import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { WrapperConsumer } from "../../store";

class categorias extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.context.agrupaciones !== this.props.context.agrupaciones;
  }
  render() {
    const { agrupaciones } = this.props.context;
    return (
      <Carousel responsive={responsive} infinite={true}>
        {agrupaciones.map(item => {
          return (
            <div className="img-cat" href="/tienda">
              <Image
                src={"img/logo/" + item.imgFamilia}
                roundedCircle
                thumbnail
              />
              <label htmlFor="basic-url" className="text-cat">
                {item.nombreFamilia}
              </label>
            </div>
          );
        })}
      </Carousel>
    );
  }
}

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

export default WrapperConsumer(categorias);
