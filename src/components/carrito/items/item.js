import React from "react";
import { Container, Row, Col, Image,Button } from "react-bootstrap";
import { FaTrash } from 'react-icons/fa';
import CONSTANTES from '../../../config/CONSTANTES'
import "./styles.css";

export default function item(props) {
  const { datos } = props;
  return (
    <Container >
      <Row className="cont-Items">
        <Col xs={6} md={2}>
          <Image src={CONSTANTES.APIREST+"/img/articulos/"+datos.codigoArticulo+"webp"} rounded className="img-car" />
        </Col>
        <Col xs={6} md={4}>
          <h1>{datos.nombre}</h1>
        </Col>
        <Col xs={6} md={1}>
            <h5>{datos.precio}</h5>
        </Col>
        <Col xs={6} md={1}>
            <Button>-</Button>
        </Col>
        <Col xs={6} md={1}>
            <h5>{datos.cantidad}</h5>
        </Col>
        <Col xs={6} md={1}>
            <Button>+</Button>
        </Col>
        <Col xs={6} md={1}>
            <h4>{datos.cantidad*datos.precio}</h4>
        </Col>
         <Col xs={6} md={1}>
            <Button><FaTrash/></Button>
        </Col>
      </Row>
    </Container>
  );
}
