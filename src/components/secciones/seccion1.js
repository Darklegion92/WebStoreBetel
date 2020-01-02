import React from 'react'
import { WrapperConsumer } from "../../store";
import CONSTANTES from '../../config/CONSTANTES'
import './styles.css'

 const seccion1=({datos}) =>{
    return (
        <div className= "cont-sec1">
            <img className = "title-sec1" alt="seccion1" src={CONSTANTES.APIREST+"/"+datos.img1} />
            <div className = "body-sec1">
               {datos.texto1}
            </div>
        </div>
    )
}
export default WrapperConsumer(seccion1)