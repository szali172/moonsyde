import React, { useState } from "react";
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

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "../components/NavBar/NavBar";
import Home from "../components/Home/Home";


export default function App() {

  const [page, setPage] = useState('Home');
  const handleSetPage = (item) => {setPage(item);};

  {/* Enum class to render separate pages */}
  const PAGES = {
    "Home": <Home></Home>,
    "Gallery": null,
    "Timeline": null,
    "Merch": null
  };


    return (
      <Container fluid className="Container">

        {/* Tabs */}
        <Row>
          <NavBar pages={Object.keys(PAGES)} handleSetPage={handleSetPage}></NavBar>
        </Row>

        {/* Main Page */}
        {PAGES[page]}
        
      </Container>
    );
  }
