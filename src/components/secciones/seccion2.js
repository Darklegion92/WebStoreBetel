import React from "react";
import "./styles.css";
export default function seccion2({
  datos: { titulo, img1, img2, img3, img4, img5, img6 }
}) {
  return (
    <div className="cont-sec2">
      <div className="title-sec2">{titulo}</div>
      <div className="body01-sec2">
        <img alt="img01" src={img1} />
        <img alt="img01" src={img2} />
        <img alt="img01" src={img3} />
      </div>
      <div className="body01-sec2">
        <img alt="img01" src={img4} />
        <img alt="img01" src={img5} />
        <img alt="img01" src={img6} />
      </div>
    </div>
  );
}
