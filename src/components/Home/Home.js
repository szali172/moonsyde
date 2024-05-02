import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  UncontrolledCarousel,
  CardHeader,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText,
} from "reactstrap";

import "./Home.css";

export default function Home() {
  return (
    <Container fluid className="Container">
      <Row xs="1" style={{ paddingTop: 50, paddingBottom: 50 }}>
        <div className="head-image">
            <img className="home-image" src={require('../../assets/home_main.jpg')} alt={"Home image"} />
        </div>
        <div className="text-on-image">
        </div>
        </Row>
    </Container>
  );
}

{/*
            <UncontrolledCarousel
            items={items}
            indicators={true}
            controls={false}
            pause={false}
            autoPlay>
            </UncontrolledCarousel>
           */}