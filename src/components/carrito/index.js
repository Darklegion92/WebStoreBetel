import React from "react";
import { Nav } from "react-bootstrap";
import Items from "./items";
import SinItems from './sinItems'
import BarraPrincipal from "../barraPrincipal";
import Footer from './footer'
import "./styles.css";
import {WrapperConsumer} from '../../store';

 const carrito =({context:{carItems}})=> {

    return (
      <div>
        <Nav className="flex-column sticky-top fixed-top bg-white">
          <BarraPrincipal />
        </Nav>
       {carItems.length <= 0 && (
           <SinItems/>        
                  )}
        <Items/>
       
        <Nav id="footer" className="sticky-bottom fixed-bottom">
          <Footer />
        </Nav>
      </div>
    );
}

export default WrapperConsumer(carrito)
