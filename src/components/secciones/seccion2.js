import React from "react";
import CONSTANTES from '../../config/CONSTANTES'
import "./styles.css";
export default function seccion2({
  datos: { titulo, img1, img2, img3, img4, img5, img6 }
}) {
  return (
    <div className="cont-sec2">
      <div className="title-sec2">{titulo}</div>
      <div className="body01-sec2">
        <img alt="img01" src={CONSTANTES.APIREST+"/"+img1} />
        <img alt="img01" src={CONSTANTES.APIREST+"/"+img2} />
        <img alt="img01" src={CONSTANTES.APIREST+"/"+img3} />
      </div>
      <div className="body01-sec2">
        <img alt="img01" src={CONSTANTES.APIREST+"/"+img4} />
        <img alt="img01" src={CONSTANTES.APIREST+"/"+img5} />
        <img alt="img01" src={CONSTANTES.APIREST+"/"+img6} />
      </div>
    </div>
  );
}
