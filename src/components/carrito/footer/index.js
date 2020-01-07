import React from "react";
import { WrapperConsumer } from "../../../store";
import { Row, Col, Button } from "react-bootstrap";
import { TiShoppingCart } from "react-icons/ti";
import "./styles.css";

function footer({ context: { carItems,formatNumber } }) {
  let total = 0;
  if (carItems) {
    carItems.map(item => {
      total = total + item.cantidad * item.precioArticulo;
    });
  }
  return (
    <footer class="footer-bs">
      <Row>
        <Col xs={6} md={2}>
          <TiShoppingCart size={50} />
        </Col>
        <Col xs={6} md={6}>
          <h1>TOTAL COMPRA</h1>
        </Col>
        <Col xs={6} md={3}>
          <h1>{formatNumber.new(total,"$")}</h1>
        </Col>
        <Col xs={6} md={1}>
        <Button>Confirmar</Button>
        </Col>
      </Row>
    </footer>
  );
}

export default WrapperConsumer(footer);
