import React, { Fragment } from "react";
import BarraServicios from "../barraServicios";
import BarraPrincipal from "../barraPrincipal";
import BarraAgrupaciones from "../barraAgrupaciones";
import Slider from "../slider";
import Categorias from "../categorias";
import { Nav } from "react-bootstrap";
import "./styles.css";
var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
export default function pages(props) {
  return (
    <Fragment id="general">
      <Nav className="flex-column sticky-top fixed-top bg-white">
        <div id="menu-servicios">
          <BarraServicios />
        </div>
        <BarraPrincipal />
        <BarraAgrupaciones />
      </Nav>
      <div id="cuerpo">
        <Slider />
        <div>
          <Categorias/>
        </div>
      </div>
    </Fragment>
  );
}
