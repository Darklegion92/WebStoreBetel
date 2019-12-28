import React from 'react'
import { Button } from "react-bootstrap";
import './styles.css'

export default function sinItems() {
    return (
        <div className="sinItems">
            <h1>EL CARRITO SE ENCUENTRA VACIO</h1>
            <Button href="/tienda">IR A COMPRAR</Button>
        </div>
    )
}
