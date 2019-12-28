import React, { Fragment } from "react";
import { Nav } from "react-bootstrap";
import BarraServicios from "../barraServicios";
import BarraPrincipal from "../barraPrincipal";

import Items from './items'
import Filter from './filter'
import Footer from "../footer";
import "./styles.css";

const maker = () => {
  return (
    <Fragment>
      <Nav className="flex-column sticky-top fixed-top bg-white">
        <div id="menu-servicios">
          <BarraServicios />
        </div>
        <BarraPrincipal />
      </Nav>
      <div id="cuerpo-maker">
        <Filter/>
        <Items/>
      </div>
      <Nav id="footer" className="sticky-bottom">
        <Footer />
      </Nav>
    </Fragment>
  );
};

export default maker;
