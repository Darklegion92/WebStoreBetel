import React, { Fragment } from "react";
import BarraServicios from "../barraServicios";
import BarraPrincipal from "../barraPrincipal";
import BarraAgrupaciones from "../barraAgrupaciones";
import Slider from "../slider";
import Categorias from "../categorias";
import { Nav } from "react-bootstrap";
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
        <Categorias />
        <Categorias />
      </div>
    </Fragment>
  );
}
