import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

export default function NavBar({ pages, handleSetPage }) {
  return (
    <Navbar className="Navbar" container={"fluid"} dark expand="xl">
      <Nav className="m-auto" navbar>
        {pages.map((item) => (
          <NavItem className="NavItem" style={{ cursor: "pointer" }}>
            <NavLink onClick={() => handleSetPage(item)}>{item}</NavLink>
          </NavItem>
        ))}
      </Nav>
    </Navbar>
  );
}
