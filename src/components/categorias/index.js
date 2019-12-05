import React from "react";
import { ListGroup, Image, InputGroup, Nav } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "./styles.css";
export default function index() {
  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      showIndicators={false}
      autoPlay={true}
      interval={5000}
      transitionTime={3000}
    >
      <div className="cont-cat" href="#">
        <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Frutas y Verduras</p>
        </div>
        <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Abarrotes</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Hogar</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Personal</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Lideres</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Otros</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Personal</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Personal</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Personal</p>
        </div>
      </div>
         <div className="cont-cat" href="#">
        <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Frutas y Verduras</p>
        </div>
        <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Abarrotes</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Hogar</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Personal</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Lideres</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Otros</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Personal</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Personal</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Personal</p>
        </div>
      </div>
         <div className="cont-cat" href="#">
        <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Frutas y Verduras</p>
        </div>
        <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Abarrotes</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Hogar</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Personal</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Lideres</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Otros</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Personal</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Personal</p>
        </div>
         <div>
          <img src="img/logo/75x67.png" alt="imagen" className="cat-img" />
          <p>Aseo Personal</p>
        </div>
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
