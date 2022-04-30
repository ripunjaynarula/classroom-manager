import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import dp from "../assets/dp.jpeg";
import Subtract from "../assets/Subtract.svg";
import { AiOutlineBell } from "react-icons/ai";
import { FaRegQuestionCircle } from "react-icons/fa";
// import { BiWifi } from "react-icons/bi";

const MDNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand
          className="navbrand"
          href="/"
          style={{ marginLeft: "-2%" }}
        >
          <img
            src={Subtract}
            className="thumb"
            alt="logo"
            style={{ height: "36px", width: "36px" }}
          />
          <div
            style={{
              fontFamily: "poppins",
              lineHeight: "80%",
              marginTop: "2px",
            }}
          >
            <span style={{ alignContent: "left" }}>
              <b>
                Classroom <br />
                <span style={{ marginTop: "-5px" }}>Manager</span>
              </b>
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          style={{ marginRight: "-2%", alignContent: "center" }}
        >
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#user">
              <div>
                <img
                  src={dp}
                  alt="userimg"
                  className="thumb user"
                  style={{ marginLeft: "5px" }}
                />
                <b>Ripunjay</b>
              </div>
            </Nav.Link>
            <Nav.Link>
              <AiOutlineBell size={30} style={{ marginTop: "2px" }} />
            </Nav.Link>
            <Nav.Link>
              <FaRegQuestionCircle size={30} style={{ marginTop: "2px" }} />
              
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MDNav;
