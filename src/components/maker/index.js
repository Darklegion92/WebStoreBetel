import React, { Fragment, Component } from "react";
import { Nav } from "react-bootstrap";
import BarraServicios from "../barraServicios";
import { CardDeck } from "react-bootstrap";
import BarraPrincipal from "../barraPrincipal";
import { WrapperConsumer, ActionsTypes } from "../../store";
import Items from "./items";
import Filter from "./filter";
import Footer from "../footer";
import "./styles.css";

class maker extends Component {
  state = {
    actualizar: true
  };
  componentDidMount() {
    const { dispatch, filtros } = this.props.context;
    const texto = this.props.location.search;

    if (this.props.location.search) {
      dispatch({
        type: ActionsTypes.CAMBIARSTATE,
        value: {
          filtros: {
            texto: texto.substring(7).toUpperCase(),
            familia: filtros.familia,
            grupo: filtros.grupo
          },
          montarArticulos: true
        }
      });
    }

    if (this.props.match.params.familia) {
      dispatch({
        type: ActionsTypes.CAMBIARSTATE,
        value: {
          filtros: { familia: this.props.match.params.familia.toUpperCase() },
          montarArticulos: true
        }
      });
    }
    if (this.props.match.params.grupo) {
      dispatch({
        type: ActionsTypes.CAMBIARSTATE,
        value: {
          filtros: {
            grupo: this.props.match.params.grupo.toUpperCase(),
            familia: this.props.match.params.familia.toUpperCase()
          },
          montarArticulos: true
        }
      });
    }
    if (this.props.match.params.subgrupo) {
      dispatch({
        type: ActionsTypes.CAMBIARSTATE,
        value: {
          filtros: {
            subgrupo: this.props.match.params.subgrupo.toUpperCase(),
            grupo: this.props.match.params.grupo.toUpperCase(),
            familia: this.props.match.params.familia.toUpperCase()
          },
          montarArticulos: true
        }
      });
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.match.params.filtro !== this.props.context.filtros.texto;
  }
  componentDidUpdate() {
    const { dispatch } = this.props.context;

    try {
      const texto = this.props.location.search;
      if (
        this.props.context.filtros.texto.toUpperCase() !==
        texto.substring(7).toUpperCase()
      )
        if (this.props.location.search) {
          dispatch({
            type: ActionsTypes.CAMBIARSTATE,
            value: {
              filtros: { texto: texto.substring(7).toUpperCase() },
              montarArticulos: true
            }
          });
          this.setState({ actualizar: false });
        } else {
          dispatch({
            type: ActionsTypes.CAMBIARSTATE,
            value: {
              filtros: { texto: "" },
              montarArticulos: true
            }
          });
        }
    } catch (e) {}
  }

  render() {
    const { articulos } = this.props.context;
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
          {articulos.length > 0 && <Items />}
          {articulos.length <= 0 && (
            <CardDeck className="content-card">
              <h1>No hay articulos</h1>
            </CardDeck>
          )}
        </div>
        <Nav id="footer" className="sticky-bottom">
          <Footer />
        </Nav>
      </Fragment>
    );
  }
}
export default WrapperConsumer(maker);
