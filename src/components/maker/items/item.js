import React from "react";
import { Button, Card } from "react-bootstrap";
import CONSTANTES from "../../../config/CONSTANTES";
import { WrapperConsumer, ActionsTypes } from "../../../store";
import EnCarrito from "./btnEnCarrito";
import "./styles.css";

function filtrar(arr, codigoArticulo) {
  let res = 0;
  arr.map(item => {
    if (item.codigoArticulo === codigoArticulo) res++;
  });

  if (res > 0) {
    return false;
  }
  return true;
}
function index(props) {
  const { id, nombreArticulo, precioArticulo, codigoArticulo } = props.datos;
  const { dispatch, carItems, formatNumber } = props.context;

  return (
    <Card className="card-content" id={id}>
      <Card.Img
        className="card-img"
        variant="top"
        src={CONSTANTES.APIREST + "/img/articulos/" + codigoArticulo + ".jpg"}
      />
      <Card.Text className="text-preOld">
        {formatNumber.new(precioArticulo, "$")}
      </Card.Text>
      <Card.Text className="text-preNew">
        {formatNumber.new(precioArticulo, "$")}
      </Card.Text>
      <Card.Text className="text-preUnit">Precio Unidad Minima</Card.Text>
      <Card.Text className="text-preName">{nombreArticulo}</Card.Text>
      {filtrar(carItems, codigoArticulo) && (
        <Button
          className="btn-comprar"
          onClick={e => {
            dispatch({
              type: ActionsTypes.agregarItemCarrito,
              value: props.datos
            });
          }}
        >
          ¡Lo quiero!
        </Button>
      )}
      {!filtrar(carItems, codigoArticulo) && (
        <EnCarrito
          carItems={carItems}
          codigoArticulo={codigoArticulo}
          dispatch={dispatch}
        />
      )}
    </Card>
  );
}

export default WrapperConsumer(index);
