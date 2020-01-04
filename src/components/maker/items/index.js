import React, { Component } from "react";
import { CardDeck } from "react-bootstrap";
import Item from "./item";
import { WrapperConsumer } from "../../../store";
import "./styles.css";

class items extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.context.articulos !== this.props.context.articulos
    );
  }
  render() {
    const {
      context: { articulos }
    } = this.props;
    return (
      <CardDeck className="content-card">
        {articulos.map(articulo => {
          return <Item datos={articulo} />;
        })}
      </CardDeck>
    );
  }
}

export default WrapperConsumer(items);
