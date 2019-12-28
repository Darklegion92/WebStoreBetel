import React from "react";
import "./styles.css";
import { WrapperConsumer } from "../../../store";
import { IoMdClose } from "react-icons/io";
import { Button, Form } from "react-bootstrap/";

const filter = ({
  context: {
    filtros,
    agrupaciones,
    marcas
  }
}) => {
  return (
    <div className="panelFiltro">
      <h1>FILTROS</h1>
      <div className="filtros">
        {filtros.map(item => {
          return (
            <div className="item-filtro">
              {item}
              <Button className="icono-cerrar">
                <IoMdClose size={10} />
              </Button>
            </div>
          );
        })}
      </div>
      <h1>DEPARTAMENTOS</h1>
      <div className="borde">
        <div className="grupo-filtro">
          {agrupaciones.map(agrupacion => {
            return <Form.Check label={agrupacion.nombreFamilia} />;
          })}
        </div>
      </div>
      <h1>MARCAS</h1>
      <div className="borde">
        <div className="grupo-filtro">
          {marcas.map(marca => {
            return <Form.Check label={marca.nombreMarca} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default WrapperConsumer(filter);
