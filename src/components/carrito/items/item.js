import React from "react";
import { Image, Button } from "react-bootstrap";
import CONSTANTES from "../../../config/CONSTANTES";
import { WrapperConsumer, ActionsTypes } from "../../../store";
import "./styles.css";

function item(props) {
  const { datos, index } = props;
  const { dispatch, formatNumber } = props.context;
  return (
    <div className="cont-Items">
      <div className="col-1">
        <Image
          src={
            CONSTANTES.APIREST +
            "/img/articulos/" +
            datos.codigoArticulo +
            ".jpg"
          }
          rounded
          className="img-car"
        />
      </div>
      <div className="col-2">
        <h1>{datos.nombreArticulo}</h1>
      </div>
      <div className="col-3">
        <h5>{formatNumber.new(datos.precioArticulo, "$")}</h5>
      </div>
      <div className="col-4">
        <div className="col-4-1">
          <Button
            onClick={e =>
              dispatch({ type: ActionsTypes.restarItem, value: index })
            }
            variant="danger"
          >
            -
          </Button>
        </div>
        <div className="col-4-2">
          <h5>{datos.cantidad}</h5>
        </div>
        <div className="col-4-3">
          <Button
            onClick={e =>
              dispatch({ type: ActionsTypes.sumarItem, value: index })
            }
            variant="success"
          >
            +
          </Button>
        </div>
      </div>
      <div className="col-5">
        <h4>{formatNumber.new(datos.cantidad * datos.precioArticulo, "$")}</h4>
      </div>
    </div>
  );
}
export default WrapperConsumer(item);
