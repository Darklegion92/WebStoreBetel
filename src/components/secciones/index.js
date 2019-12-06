import React, { Component } from 'react'
import Seccion1 from './seccion1'
import Seccion2 from './seccion2'
export default class index extends Component {
    render() {
        return (
            <div>
            <Seccion1/>
            <Seccion2 title="SECCIÓN NUMERO 1"/>
            <Seccion2 title="SECCIÓN NUMERO 2"/>
            </div>
            
        )
    }
}
