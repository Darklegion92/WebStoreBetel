import React, { Component } from "react";
import { Nav, NavDropdown } from "react-bootstrap";
import { WrapperConsumer } from "../../store";

import "./styles.css";

class barraAgrupaciones extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.context.agrupaciones !== this.props.context.agrupaciones;
  }
  
  render() {
    const { agrupaciones } = this.props.context;
    return (
      <Nav>
        {agrupaciones.map(item => {
          return (
            <NavDropdown
              title={item.nombreFamilia}
              id="basic-nav-dropdown"
              className="cont-Agr"
            >
              {item.grupos.map(i => {
                return (
                  <NavDropdown.Item
                    href={"/tienda/" + item.nombreFamilia + "/" + i.nombreGrupo}
                  >
                    {i.nombreGrupo}
                  </NavDropdown.Item>
                );
              })}
              <NavDropdown.Divider />
            </NavDropdown>
          );
        })}
      </Nav>
    );
  }
}
export default WrapperConsumer(barraAgrupaciones);
