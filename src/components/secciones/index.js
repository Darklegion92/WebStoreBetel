import React from "react";
import Seccion1 from "./seccion1";
import Seccion2 from "./seccion2";
import { WrapperConsumer } from "../../store";
import './styles.css'

 const secciones =({context:{secciones}})=> {
    return (
      <div className="container-secciones">

      {secciones.map(item=>{
          if(item.tipoSeccion===1)return<Seccion1 datos={item}/>

          return <Seccion2 datos={item} />
      })}
      </div>
    );
}
export default WrapperConsumer(secciones)