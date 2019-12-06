import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
  FaTelegram
} from "react-icons/fa";
import "./styles.css";

const Footer = () => {
  return (
    <div Style="background-color:white;">
      <footer class="footer-bs">
        <div class="row">
          <div class="col-md-3 footer-brand animated fadeInLeft">
            <h2>Supercados Betel S.A.S.</h2>
            <p>
              Compañia encargada de ....
              fdjkbsdfjksdfjsdbfjkdsfbsdbfjsbdfkjsbfjklbsj
              fsdfdsfsdfdsfsdfsdfsdfsdfsd sdfsdf sfds df sdfsd sdf sdfwdfsfw w
              wfw fwf fdfsfsd sdfs fdsd sdfsd sdfws ds fsdfsd sfsdf sdfs sds
              sdfsdf sdfsdf sdfws fdsdf sdf swdfs dsf dfsdfs d dsfsdfsdfs dsfs
              fdsfsdfsfd sdfsd dsfssd fd
            </p>
            <p>© 2019 SOLTEC, Todos los derechos reservados</p>
          </div>
          <div class="col-md-4 footer-nav animated fadeInUp">
            <h2>Nuestras Redes</h2>
            <div class="col-md-6">
              <ul class="pages">
                <li>
                  <a href="##">
                    {" "}
                    <FaFacebook size="30" /> Facebook
                  </a>
                </li>
                <li>
                  <a href="##">
                    <FaInstagram size="30" /> Instagram
                  </a>
                </li>
                <li>
                  <a href="##">
                    <FaWhatsapp size="30" /> Whatsapp
                  </a>
                </li>
                <li>
                  <a href="##">
                    <FaTwitter size="30" /> Twitter
                  </a>
                </li>
                <li>
                  <a href="##">
                    <FaTelegram size="30" /> Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 footer-ns animated fadeInRight">
            <h2>Sucursales</h2>
            <p>Sucursal 1</p>
            <p>Sucursal 2</p>
            <p>Sucursal 3</p>
            <p>Sucursal 4</p>
            <p>Sucursal 5</p>
            <p>Sucursal 6</p>
            <p>Sucursal 7</p>
            <p>Sucursal 8</p>
            <p>Sucursal 9</p>
            <p>Sucursal 10</p>
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
};

export default Footer;
