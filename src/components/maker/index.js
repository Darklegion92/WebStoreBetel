import React, { Fragment, Component } from "react";
import { Nav } from "react-bootstrap";
import BarraServicios from "../barraServicios";
import BarraPrincipal from "../barraPrincipal";
import { WrapperConsumer, ActionsTypes } from "../../store";
import Items from "./items";
import Filter from "./filter";
import Footer from "../footer";
import "./styles.css";

class maker extends Component {
  componentDidMount() {
    const { dispatch } = this.props.context;
    if (this.props.match.params.filtro) {
      dispatch({
        type: ActionsTypes.CAMBIARSTATE,
        value: {
          filtros: { texto: this.props.match.params.filtro.toUpperCase() }
        }
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.context.articulos !== nextProps.context.articulos ||
      this.props.match.params.filtro !== nextProps.match.params.filtro
    );
  }
  componentDidUpdate() {
    console.log("actualizando");
    
      const { dispatch } = this.props.context;
    if (this.props.match.params.filtro) {
      dispatch({
        type: ActionsTypes.CAMBIARSTATE,
        value: {
          filtros: { texto: this.props.match.params.filtro.toUpperCase() },
          montarArticulos: true
        }
      });
    }else{
       dispatch({
        type: ActionsTypes.CAMBIARSTATE,
        value: {
          filtros: { texto: this.props.context.valorFiltro},
          montarArticulos: true
        }
      });
    }
  }

  render() {
    return (
      <Fragment>
        <Nav className="flex-column sticky-top fixed-top bg-white">
          <div id="menu-servicios">
            <BarraServicios />
          </div>
          <BarraPrincipal />
        </Nav>
        <div id="cuerpo-maker">
          <Filter />
          <Items />
        </div>
        <Nav id="footer" className="sticky-bottom">
          <Footer />
        </Nav>
      </Fragment>
    );
  }
}
export default WrapperConsumer(maker);
