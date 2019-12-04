import React, { Fragment } from "react";
import BarraServicios from "../barraServicios";
import BarraPrincipal from "../barraPrincipal";
export default function pages(props) {
  return (
    <Fragment>
     <BarraServicios />
      <BarraPrincipal/>
    </Fragment>
  );
}
