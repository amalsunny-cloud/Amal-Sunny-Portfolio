import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  const [expanded, setExpanded] = useState(false);

  const closeNav = () => setExpanded(false);

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        expanded={expanded}
        className="main-navbar d-flex"
      >
    
        <Container >
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setExpanded(prev => !prev)}
          />

          <Navbar.Collapse id="basic-navbar-nav" >
            <div className="d-flex justify-content-center w-100">
            <Nav >
              <Nav.Link
                activeclass="active"
                to="/"
                as={NavLink}
                offset={-70}
                duration={500}
                className="nav-link custom-link"
                style={{ overflow: "hidden" }}
                onClick={closeNav}
                end
              >
                Home
              </Nav.Link>

              <Nav.Link
                activeclass="active"
                to="skills"
                as={NavLink}
                offset={-70}
                duration={500}
                className="nav-link custom-link"
                onClick={closeNav}
                style={{ overflow: "hidden" }}
              >
                Skills
              </Nav.Link>

              <Nav.Link
                activeclass="active"
                to="projects"
                as={NavLink}
                offset={-70}
                duration={500}
                className="nav-link custom-link"
                onClick={closeNav}
                style={{ overflow: "hidden" }}
              >
                Projects
              </Nav.Link>

              <Nav.Link
                activeclass="active"
                to="contact"
                as={NavLink}
                offset={-70}
                duration={500}
                className="nav-link custom-link"
                onClick={closeNav}
                style={{ overflow: "hidden" }}
              >
                Contact
              </Nav.Link>
            </Nav>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};

export default Layout;