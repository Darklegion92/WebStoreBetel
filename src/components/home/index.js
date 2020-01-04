import React, { Fragment, Component } from "react";
import { Nav } from "react-bootstrap";
import BarraServicios from "../barraServicios";
import BarraPrincipal from "../barraPrincipal";
import BarraAgrupaciones from "../barraAgrupaciones";
import Slider from "../slider";
import Categorias from "../categorias";
import Secciones from "../secciones";
import Footer from "../footer";
import CONSTANTES from "../../config/CONSTANTES";
import axios from "axios";
import { WrapperConsumer, ActionsTypes } from "../../store";
import "./styles.css";

class Home extends Component {

  constructor(props){
    super(props)
    console.log(this.props);
    
  }

  componentDidMount() {
    this.cargarDatosIniciales();
  }

  cargarDatosIniciales = async () => {
    const resSlider = await axios.get(CONSTANTES.APIREST + "/slider");
    const imageSlider = resSlider.data;
    const resAgrupaciones = await axios.get(
      CONSTANTES.APIREST + "/agrupaciones"
    );
    const agrupaciones = resAgrupaciones.data;
    const resSecciones = await axios.get(CONSTANTES.APIREST + "/secciones");
    const secciones = resSecciones.data;
    const resSucursales = await axios.get(CONSTANTES.APIREST + "/datos/sucursales");
    const sucursales = resSucursales.data;
    const resRedesSociales = await axios.get(CONSTANTES.APIREST + "/datos/redes");
    const redesSociales = resRedesSociales.data;
    const resMensajeEmpresa = await axios.get(CONSTANTES.APIREST + "/datos");    
    const mensajeEmpresa = resMensajeEmpresa.data[0].valorConfiguracion;
    
    const { dispatch } = this.props.context;

    dispatch({
      type: ActionsTypes.CAMBIARSTATE,
      value: {
        imageSlider,
        agrupaciones,
        secciones,
        sucursales,
        redesSociales,
        mensajeEmpresa
      }
    });
  };
  
  render() {
    return (
      <Fragment>
        <Nav className="flex-column sticky-top fixed-top bg-white">
          <div id="menu-servicios">
            <BarraServicios />
          </div>
          <BarraPrincipal />
          <BarraAgrupaciones />
        </Nav>
        <div>
          <Slider />
          <div Style="margin:20px 0px">
            <Categorias />
          </div>
          <Secciones />
        </div>
        <Nav id="footer" className="sticky-bottom">
          <Footer />
        </Nav>
      </Fragment>
    );
  }
}

export default WrapperConsumer(Home);
