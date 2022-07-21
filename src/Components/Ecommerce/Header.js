import React from "react";
import Badge from "@mui/material/Badge";
import { FiShoppingCart } from "react-icons/fi";
import { Navbar, Container, Nav, NavLink } from "react-bootstrap";
const Header = () => {
  return (
    <>
      <Navbar bg="light">
        <Container>
          <NavLink to="/" className="text-decoration-none text-dark mx-4">
            Add to Cart
          </NavLink>

          <Nav className="me-auto">
            <Nav.Link href="#">Home</Nav.Link>
          </Nav>

          <Badge badgeContent={4} color="primary">
            <FiShoppingCart style={{ size: "", cursor: "pointer" }} />
          </Badge>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
