import React from 'react'
import './styles.css'
export default function seccion2(props) {
    return (
        <div className="cont-sec2">
            <div className="title-sec2">
                {props.title}
            </div>
            <div className="body01-sec2">
                <img alt="img01" src="img/secciones/01.webp"/>
                <img alt="img01" src="img/secciones/02.webp"/>
                <img alt="img01" src="img/secciones/03.webp"/>
            </div>
            <div className="body01-sec2">
                <img alt="img01" src="img/secciones/04.webp"/>
                <img alt="img01" src="img/secciones/05.webp"/>
                <img alt="img01" src="img/secciones/06.webp"/>
            </div>
        </div>
    )
}
