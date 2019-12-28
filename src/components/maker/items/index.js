import React from "react";
import { CardDeck } from "react-bootstrap";
import Item from "./item";
import { WrapperConsumer } from "../../../store";
import './styles.css'
const items = ({ context: { articulos } }) => {
  return (
    <CardDeck className="content-card">
      {articulos.map(articulo => {
        return <Item datos={articulo} />;
      })}
    </CardDeck>
  );
};

export default WrapperConsumer(items)
