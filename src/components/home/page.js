import React, { Fragment } from "react";
import { Nav } from "react-bootstrap";
import BarraServicios from "../barraServicios";
import BarraPrincipal from "../barraPrincipal";
import BarraAgrupaciones from "../barraAgrupaciones";
import Slider from "../slider";
import Categorias from "../categorias";
import Secciones from "../secciones";

import "./styles.css";

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
        <Categorias />
        <Secciones/>
      </div>
    </Fragment>
  );
}
