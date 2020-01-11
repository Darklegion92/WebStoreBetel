import React, { Component } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { WrapperConsumer, ActionsTypes } from "../../store";
import CONSTANTES from "../../config/CONSTANTES";
import axios from "axios";
import "./styles.css";

class Footer extends Component {
componentDidMount() {
    this.cargarDatosIniciales();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextProps.context.mensajeEmpresa !== this.props.context.mensajeEmpresa ||
      nextProps.context.sucursales !== this.props.context.sucursales ||
      nextProps.context.redesSociales !== this.props.context.redesSociales
    );
  }

  cargarDatosIniciales = async () => {
    const { dispatch } = this.props.context;

    const resSucursales = await axios.get(
      CONSTANTES.APIREST + "/datos/sucursales"
    );
    const sucursales = resSucursales.data;
    const resRedesSociales = await axios.get(
      CONSTANTES.APIREST + "/datos/redes"
    );
    const redesSociales = resRedesSociales.data;
    const resMensajeEmpresa = await axios.get(CONSTANTES.APIREST + "/datos");
    const mensajeEmpresa = resMensajeEmpresa.data[0].valorConfiguracion;

    dispatch({
      type: ActionsTypes.CAMBIARSTATE,
      value: {
        sucursales,
        redesSociales,
        mensajeEmpresa
      }
    });
    
  };
  render() {
    const {
      context: { mensajeEmpresa, sucursales, redesSociales }
    } = this.props;
    return (
      <div Style="background-color:white;  width: 100%!important; align-items: center;">
        <footer class="footer-bs" >
          <div class="row">
            <div class="col-md-3 footer-brand animated fadeInLeft">
              <h2>Supercados Betel S.A.S.</h2>
              <p>{mensajeEmpresa}</p>
              <p>© 2019 SOLTEC, Todos los derechos reservados</p>
            </div>
            <div className="col-md-4 footer-nav animated fadeInUp">
              <h2>Nuestras Redes</h2>
              <div className="col-md-6">
                <ul className="pages">
                  <li>
                    <a
                      href={redesSociales[0].urlRedSocial}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FaFacebook size="30" /> Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href={redesSociales[1].urlRedSocial}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaInstagram size="30" /> Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={redesSociales[2].urlRedSocial}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp size="30" /> Whatsapp
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 footer-ns animated fadeInRight">
              <h2>Sucursales</h2>
              {sucursales.map(sucursal => {
                return (
                  <p>
                    <a
                      href={sucursal.direccionSucursal}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {sucursal.nombreSucursal}
                    </a>
                  </p>
                );
              })}
            </div>
          </div>
        </footer>
        <section Style="text-align:center; margin:10px auto;">
          <p>
            Desarrollado por{" "}
            <a href="http://tecnologiaydesarrollo.com.co">
              SOLTEC - Tecnología y Desarrollo
            </a>
          </p>
        </section>
      </div>
    );
  }
}

export default WrapperConsumer(Footer);
