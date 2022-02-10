import {useState} from "react"

import Button      from 'react-bootstrap/Button';
import Navbar      from 'react-bootstrap/Navbar';
import Container   from 'react-bootstrap/Container';
import Nav         from 'react-bootstrap/Nav';
import InputGroup  from 'react-bootstrap/InputGroup';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas   from 'react-bootstrap/Offcanvas';
import Form        from 'react-bootstrap/Form';
import Accordion   from 'react-bootstrap/Accordion';

const frischetheke_list = 
  [ 
    "Obst",
    "Gemüse",
    "Frischmilch & mehr",
    "Joghurt & Quark",
    "Sahne & Rahm",
    "Butter & Brotaufstrich",
    "Desserts & Smoothies",
    "Käse",
    "Eier",
    "Fleisch",
    "Wurst & Fisch",
    "Schnell & Lecker"
]

const links = [
  {name:"Frischetheke", svg:"frischetheke", dropdownlinks:frischetheke_list},
  {name:"Lebensmittel", svg:"lebensmittel", dropdownlinks:["Obst","Gemüse","Butter"]},
  {name:"Haushalt", svg:"haushalt", dropdownlinks:["Obst","Gemüse","Butter"]},
  {name:"Wasser", svg:"wasser", dropdownlinks:["Obst","Gemüse","Butter"]},
  {name:"Bier", svg:"bier", dropdownlinks:["Obst","Gemüse","Butter"]},
  {name:"Limonade", svg:"limonade", dropdownlinks:["Obst","Gemüse","Butter"]},
  {name:"Saft&Schorle", svg:"saft-und-schorle", dropdownlinks:["Obst","Gemüse","Butter"]},
  {name:"Wein&mehr", svg:"wein-und-mehr", dropdownlinks:["Obst","Gemüse","Butter"]},
  {name:"Spirituosen", svg:"spirituosen", dropdownlinks:["Obst","Gemüse","Butter"]},
  {name:"Aktionen", svg:"aktionen", dropdownlinks:["Obst","Gemüse","Butter"]},
]

function Navbar1({refMobileSearch, toggleHidden}) {

  const [show, setShow] = useState(false);
  
  const handleClose   = () => setShow(false);
  const showOffcanvas = () => setShow(true);

  return (
    <div className="Navbar1">

      {/* top navbar */}
      <Navbar className="navbar-top">
        <Container fluid="lg">
          <Nav className="nav-top">
            
            {/* brand */}
            <Navbar.Brand href="#home">
              <img src="/svg/logo-big.svg"/>
            </Navbar.Brand>
            
            {/* delivery-area link */}
            <Nav.Link href="#home" className="d-none d-xl-block">
              <div className="fs-6 flex-1 flex-column">
                <div className="m-0 text-white">Liefergebiet</div>
                <div className="d-flex align-items-center">
                  <div className="m-0 text-white">30419</div>
                  <img src={`/svg/chevron-right.svg`} width="13" className="white-svg ms-2"/>
                </div>
              </div>
            </Nav.Link>
                  
            {/* search bar */}
            <InputGroup className="search">
              <Form.Control type="text" placeholder="Was suchst du?" />
              <Button id="button-addon2">
                <img src="/svg/search.svg"/>
              </Button>
            </InputGroup>
            
            {/* links on the right */}
            <div className="navbar-top-links">

              {/* search icon */}
              <Nav.Link className="d-md-none" variant='transparent' onClick={toggleHidden}>
                <img src="/svg/search.svg" className="white-svg"/>
              </Nav.Link>
              
              {/* account icon */}
              <Nav.Link href="#home" className="d-xl-none ">
                <img src="/svg/person.svg" className="white-svg"/>
              </Nav.Link>
              
              {/* account link */}
              <Nav.Link href="#home" className="d-none d-xl-block">
                Konto
              </Nav.Link>
              
              {/* checkout icon */}
              <Nav.Link href="#home">
                <img src="/svg/buy.svg"/>
              </Nav.Link>
              
              {/* menu toggle icon */}
              <Nav.Link className="d-xl-none" variant="transparent" onClick={showOffcanvas}>
                <img src="/svg/list.svg" className="white-svg"/>
              </Nav.Link>
            
            </div>

            {/* offcanvas */}
            <Offcanvas show={show} onHide={handleClose}>

              <Offcanvas.Body>
                {
                  links.map((link,i) => {
                      return(
                        <Accordion defaultActiveKey="0">
                          <Accordion.Item eventKey="1">
                            
                            <Accordion.Header>
                              <div>
                                <img src={`/svg/${link.svg}_color.svg`} width="30"/>
                                {link.name}
                              </div>
                            </Accordion.Header>
                            
                            <Accordion.Body>
                              {link.dropdownlinks.map((item, i) => {
                                return(
                                  <p className="accordion-link" href="#">{item}</p>
                                )
                              })}
                            </Accordion.Body>
                          
                          </Accordion.Item>
                        </Accordion>
                      )
                  })
                }
              </Offcanvas.Body>

            </Offcanvas>

          </Nav>
        </Container>
      </Navbar>

      {/* bottom navbar */}
      <Navbar expand="xl" className="navbar-bottom">
        <Container >
          <Nav>
            <Navbar.Collapse id="basic-navbar-nav">
              {
                links.map((link,i) => {
                  return(
                    <NavDropdown show = {true} title=
                      {<div className="link">
                          <img src={`/svg/${link.svg}_color.svg`} width="30"/>
                          {link.name}
                        </div>} 
                      id={`link-${i+1}`} className="nav-links"
                    >
                      {link.dropdownlinks.map(item => {
                        return (<NavDropdown.Item href="#action1">{item}</NavDropdown.Item>)
                      })}
                    </NavDropdown>
                  )
                })
              }
            </Navbar.Collapse>
          </Nav>
        </Container>
      </Navbar>

      {/* search bar mobile */}
      <InputGroup ref={refMobileSearch} className="mobile-search hidden">
        <Form.Control type="text" placeholder="Was suchst du?" />
        <Button variant='secondary' id="button-addon2">
          <img src="/svg/search.svg" width="20"/>
        </Button>
      </InputGroup>

    </div>
  );
}

export default Navbar1;
