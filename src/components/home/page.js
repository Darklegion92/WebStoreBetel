import React, { Fragment } from "react";
import BarraServicios from "../barraServicios";
import BarraPrincipal from "../barraPrincipal";
import BarraAgrupaciones from "../barraAgrupaciones";
import Slider from "../slider";
import Categorias from "../categorias";

export default function pages(props) {
  return (
    <Fragment>
      <BarraServicios/>
      <BarraPrincipal/>
      <BarraAgrupaciones/>
      <Slider/>
      <Categorias/>
    </Fragment>
  );
}
