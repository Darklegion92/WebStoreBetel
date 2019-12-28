import React from "react";
import { Button,Card } from "react-bootstrap";
import './styles.css'
export default function index(props) {
  const {id,nombreArticulo,precioArticulo} = props.datos
  return (
    <Card className="card-content" id={id}>
      <Card.Img className="card-img" variant="top" src="img/articulos/harina.webp"/>
      <Card.Text className="text-preOld">{precioArticulo}</Card.Text>
      <Card.Text  className="text-preNew">{precioArticulo}</Card.Text>
      <Card.Text  className="text-preUnit">Precio Unidad Minima</Card.Text>
      <Card.Text  className="text-preName">{nombreArticulo}</Card.Text>
      <Button  className="btn-comprar">¡Lo quiero!</Button>
    </Card>
  );
}
