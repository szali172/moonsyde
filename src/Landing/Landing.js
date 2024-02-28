import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  UncontrolledCarousel,
  CardHeader,
  CardImg,
  CardImgOverlay,
  CardTitle,
  CardText
} from 'reactstrap';

import './Landing.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const items = [
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  },
  {
    src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
  }
];



export default class Landing extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <Container fluid className="Container">
        <Row noGutters>
            <Navbar className="Navbar" container={"fluid"} dark expand="xl">
                <Nav className="m-auto" navbar>
                  <NavItem className="NavItem">
                    <NavLink href="/">News</NavLink>
                  </NavItem>
                  <NavItem className="NavItem">
                    <NavLink href="/">Gallery</NavLink>
                  </NavItem>
                  <NavItem className="NavItem">
                    <NavLink href="/">Timeline</NavLink>
                  </NavItem>
                  <NavItem className="NavItem">
                    <NavLink href="/">Merch</NavLink>
                  </NavItem>
                </Nav>
            </Navbar>
        </Row>
        <Row noGutters xs='1' style={{paddingTop: 50, paddingBottom: 50}}>
          <Col xs='2'></Col>
          <Col lg='8' style={{boxShadow: 100}}>
            <UncontrolledCarousel items={items} indicators={true} controls={false} pause={false} autoPlay></UncontrolledCarousel>
          </Col>
          <Col xs='2'></Col>
        </Row>
        <Row>
          
          <Card className='News' inverse>
            <CardImg src={require ('../assets/pretend_cover.jpg')}></CardImg>
            <CardImgOverlay>
              <CardTitle tag="h5">
                Pretend is out now!
              </CardTitle>
              <CardText>
                Check it out HERE!
              </CardText>
            </CardImgOverlay>
          </Card>
        </Row>
      </Container>
    );
  }
}
