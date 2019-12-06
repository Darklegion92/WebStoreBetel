import React from "react";
import {  Image } from "react-bootstrap";
import "./styles.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3
  }
};

export default function categorias() {
  return (
    <Carousel
      responsive={responsive}
      infinite={true}
    >
      <div className="img-cat">
        <Image src="img/logo/75x67.png" roundedCircle thumbnail />
        <label htmlFor="basic-url" className="text-cat">
          Aseo Hogar
        </label>
      </div>
      <div className="img-cat">
        <Image src="img/logo/75x67.png" roundedCircle thumbnail />
        <label htmlFor="basic-url" className="text-cat">
          Aseo Hogar
        </label>
      </div>
      <div className="img-cat">
        <Image src="img/logo/75x67.png" roundedCircle thumbnail />
        <label htmlFor="basic-url" className="text-cat">
          Aseo Hogar
        </label>
      </div>
      <div className="img-cat">
        <Image src="img/logo/75x67.png" roundedCircle thumbnail />
        <label htmlFor="basic-url" className="text-cat">
          Aseo Hogar
        </label>
      </div>
       <div className="img-cat">
        <Image src="img/logo/75x67.png" roundedCircle thumbnail />
        <label htmlFor="basic-url" className="text-cat">
          Aseo Hogar
        </label>
      </div>
      <div className="img-cat">
        <Image src="img/logo/75x67.png" roundedCircle thumbnail />
        <label htmlFor="basic-url" className="text-cat">
          Aseo Hogar
        </label>
      </div>
       <div className="img-cat">
        <Image src="img/logo/75x67.png" roundedCircle thumbnail />
        <label htmlFor="basic-url" className="text-cat">
          Aseo Hogar
        </label>
      </div>
      <div className="img-cat">
        <Image src="img/logo/75x67.png" roundedCircle thumbnail />
        <label htmlFor="basic-url" className="text-cat">
          Aseo Hogar
        </label>
      </div>
    </Carousel>
  );
}
/*
<ListGroup horizontal className="con-cat overflow-auto">
     
      <ListGroup.Item className="con-cat">
        <InputGroup className="mb-3 com-cat">
          <Nav.Link href="/home">
            <Image src="img/logo/75x67.png" roundedCircle thumbnail />
            <label htmlFor="basic-url" className = "text-cat">Aseo Hogar</label>
          </Nav.Link>
        </InputGroup>
      </ListGroup.Item>
      <ListGroup.Item className="con-cat">
        <InputGroup className="mb-3 com-cat">
          <Nav.Link href="/home">
            <Image src="img/logo/75x67.png" roundedCircle thumbnail />
            <label htmlFor="basic-url" className = "text-cat">Frutas y Verduras</label>
          </Nav.Link>
        </InputGroup>
      </ListGroup.Item>
      <ListGroup.Item className="con-cat">
        <InputGroup className="mb-3 com-cat">
          <Nav.Link href="/home">
            <Image src="img/logo/75x67.png" roundedCircle thumbnail />
            <label htmlFor="basic-url" className = "text-cat">Abarrotes </label>
          </Nav.Link>
        </InputGroup>
      </ListGroup.Item>
      <ListGroup.Item className="con-cat">
        <InputGroup className="mb-3 com-cat">
          <Nav.Link href="/home">
            <Image src="img/logo/75x67.png" roundedCircle thumbnail />
            <label htmlFor="basic-url" className = "text-cat">Abarrotes </label>
          </Nav.Link>
        </InputGroup>
      </ListGroup.Item>
      <ListGroup.Item className="con-cat">
        <InputGroup className="mb-3 com-cat">
          <Nav.Link href="/home">
            <Image src="img/logo/75x67.png" roundedCircle thumbnail />
            <label htmlFor="basic-url" className = "text-cat">Abarrotes </label>
          </Nav.Link>
        </InputGroup>
      </ListGroup.Item>
       <ListGroup.Item className="con-cat">
        <InputGroup className="mb-3 com-cat">
          <Nav.Link href="/home">
            <Image src="img/logo/75x67.png" roundedCircle thumbnail />
            <label htmlFor="basic-url" className = "text-cat">Abarrotes </label>
          </Nav.Link>
        </InputGroup>
      </ListGroup.Item>
       <ListGroup.Item className="con-cat">
        <InputGroup className="mb-3 com-cat">
          <Nav.Link href="/home">
            <Image src="img/logo/75x67.png" roundedCircle thumbnail />
            <label htmlFor="basic-url" className = "text-cat">Abarrotes </label>
          </Nav.Link>
        </InputGroup>
      </ListGroup.Item>
       <ListGroup.Item className="con-cat">
        <InputGroup className="mb-3 com-cat">
          <Nav.Link href="/home">
            <Image src="img/logo/75x67.png" roundedCircle thumbnail />
            <label htmlFor="basic-url" className = "text-cat">Abarrotes </label>
          </Nav.Link>
        </InputGroup>
      </ListGroup.Item>
       <ListGroup.Item className="con-cat">
        <InputGroup className="mb-3 com-cat">
          <Nav.Link href="/home">
            <Image src="img/logo/75x67.png" roundedCircle thumbnail />
            <label htmlFor="basic-url" className = "text-cat">Abarrotes </label>
          </Nav.Link>
        </InputGroup>
      </ListGroup.Item>
    </ListGroup>

*/
