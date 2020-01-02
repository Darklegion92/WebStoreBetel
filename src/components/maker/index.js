import React, { Fragment, Component } from "react";
import { Nav } from "react-bootstrap";
import BarraServicios from "../barraServicios";
import BarraPrincipal from "../barraPrincipal";
import { WrapperConsumer } from "../../store";
import Items from "./items";
import Filter from "./filter";
import Footer from "../footer";
import "./styles.css";

class maker extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return false;
  }
  render() {
    console.log(this);
    
    return (
      <Fragment>
        <Nav className="flex-column sticky-top fixed-top bg-white">
          <div id="menu-servicios">
            <BarraServicios />
          </div>
          <BarraPrincipal />
        </Nav>
        <div id="cuerpo-maker">
          <Filter />
          <Items />
        </div>
        <Nav id="footer" className="sticky-bottom">
          <Footer />
        </Nav>
      </Fragment>
    );
  }
}
export default WrapperConsumer(maker);
