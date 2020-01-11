import React, { Component } from "react";
import { Image } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CONSTANTES from "../../config/CONSTANTES";
import { WrapperConsumer } from "../../store";

class categorias extends Component {
  state = {
    redirect: false
  };

  renderRedirect(item) {
    if (this.state.redirect) {
      return <Redirect to={"/tienda/" + item} />;
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.context.agrupaciones !== this.props.context.agrupaciones;
  }
  render() {
    const { agrupaciones } = this.props.context;
    return (
      <Carousel responsive={responsive} infinite={true}>
        {agrupaciones.map(item => {
          return (
            <div
              className="img-cat"
              onClick={this.setState({
                redirect: true
              })}
            >
              {this.renderRedirect(item.nombreFamilia)}
              <Image
                src={CONSTANTES.APIREST + "/img/logo/" + item.imgFamilia}
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
