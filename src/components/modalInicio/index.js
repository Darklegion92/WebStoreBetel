import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import CONSTANTES from "../../config/CONSTANTES";
import './styles.css'
export default class modalInicio extends Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.onClick}>
        <img src={CONSTANTES.APIREST + "/img/publicidad/promocional.jpg"} alt="prueba" />
      </Modal>
    );
  }
}
