import { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router";
import { ThemeContext } from "../contexts/ThemeContext";

export default function MyNavbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Navbar
        bg={toggleTheme}
        data-bs-theme={theme}
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link active" to="/">
                Home
              </NavLink>
              {/* <NavLink className="nav-link active" to="/products">
                Products
              </NavLink> */}
              {/* <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
        <Button onClick={toggleTheme} variant={theme}>
          Toogle Theme
        </Button>
      </Navbar>
    </>
  );
}
