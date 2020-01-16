import React, { Component } from "react";
import { CardDeck, Pagination } from "react-bootstrap";
import Item from "./item";
import { WrapperConsumer } from "../../../store";
import "./styles.css";

class items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalPaginas: 1,
      paginaActual: 1
    };
  }

  cargarNumeracion = () => {
    const numeros = [];

    for (var i = 1; i <= this.state.totalPaginas; i++) {
      if (i <= 10) {
        // eslint-disable-next-line eqeqeq
        if (this.state.paginaActual == i) {
          numeros.push(
            <Pagination.Item
              active
              id={i}
              onClick={e => this.setState({ paginaActual: e.target.id })}
            >
              {i}
            </Pagination.Item>
          );
        } else {
          numeros.push(
            <Pagination.Item
              id={i}
              onClick={e => this.setState({ paginaActual: e.target.id })}
            >
              {i}
            </Pagination.Item>
          );
        }
      } else {
        numeros.push(<Pagination.Ellipsis />);
        return numeros;
      }
    }
    return numeros;
  };

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.context.articulos !== this.props.context.articulos ||
      nextProps.context.filtros !== this.props.context.filtros ||
      this.state.paginaActual !== nextState.paginaActual ||
      this.state.totalPaginas !== nextState.totalPaginas
    );
  }

  componentDidUpdate() {
    const {
      context: { articulos }
    } = this.props;
    this.setState({
      totalPaginas: Math.round(articulos.length / 50 + 0.4)
    });
  }
  render() {
    const {
      context: { articulos }
    } = this.props;
    const numeros = this.cargarNumeracion();
    return (
      <CardDeck className="content-card">
        {articulos.map((articulo, i) => {
          if (
            50 * (this.state.paginaActual - 1) + 1 <= i + 1 &&
            this.state.paginaActual * 51 > i + 1
          )
            return <Item datos={articulo} />;

          return null;
        })}

        <div className="paginacion">
          <Pagination>
            <Pagination.First
              onClick={e => this.setState({ paginaActual: 1 })}
            />
            <Pagination.Prev
              onClick={e => {
                if (this.state.paginaActual > 1)
                  this.setState({ paginaActual: this.paginaActual-- });
              }}
            />
            {numeros}
            <Pagination.Next
              onClick={e => {
                if (this.state.paginaActual < this.state.totalPaginas) {
                  this.setState({ paginaActual: this.paginaActual++ });
                }
              }}
            />
            <Pagination.Last
              onClick={e =>
                this.setState({ paginaActual: this.state.totalPaginas })
              }
            />
          </Pagination>
        </div>
      </CardDeck>
    );
  }
}

export default WrapperConsumer(items);
