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

const links = ["item","item","item","item","item","item"]

function Navbar1({refMobileSearch, toggleHidden}) {

  const [showLeft, setShowLeft]   = useState(false);
  const [showRight, setShowRight] = useState(false);
  
  const handleClose   = () => {
    setShowLeft(false)
    setShowRight(false)
  };
  const showOffcanvas = () => setShow(true);

  return (
    <div className="Navbar2">

      <div className="nav-up">
        <a className="">
          <img className="me-2" src="./svg/ikea1.svg" alt="" />
          Planungsservice mit Termin
        </a>
        <a className="">
          <img className="me-2" src="./svg/ikea2.svg" alt="" />
          Standorte & Öffnungszeiten
        </a>
        <a className="">
          <img className="me-2" src="./svg/ikea3.svg" alt="" />
          Aktuelle Informationen
        </a>
      </div>

      <div className="nav-mid">

        <div className="menu-container d-none d-xl-flex justify-content-center align-items-center">
          <button className="menu-toggle flex-center" onClick={setShowLeft}>
            <img src="./svg/list.svg" alt="" />
          </button>
        </div>

        <div className="nav-content">
          
          <img className="logo" src="./svg/ikea.svg" alt="" />

          <div className="search-container">
            <div className="search">
              <img src="./svg/search.svg" alt="" />
              <input placeholder="Was suchst du?"/>
              <img src="./svg/foto.svg" alt="" />
            </div>
          </div>

          <div className="icons d-flex ms-3 align-items-center">
            <div id="delivery" className="d-none d-xl-flex align-items-center">
              <div className="link-1 d-flex">
                <img src="./svg/lkw.svg" alt=""/>
                <div className="d-flex flex-column">
                  <div className="text-top">Lieferung</div>
                  <div className="text-bottom">PLZ eingeben</div>
                </div>
              </div>
            </div>

            <div id="opening-hours" className="d-none d-xl-flex align-items-center">
              <div className="link-1 d-flex">
                <img className="black-svg" src="./svg/ikea2.svg" alt=""/>
                <div className="d-flex flex-column">
                  <div className="text-top">Öffnungszeiten</div>
                  <div className="text-bottom">Standort auswählen</div>
                </div>
              </div>
            </div>

            <button className="ms-2" href="" onClick={setShowRight}>
              <img className="icon" src="./svg/ikeaPerson.svg" alt="" />
            </button>
            <a className="ms-2" href="">
              <img className="icon" src="./svg/heart.svg" alt="" />
            </a>
            <a className="ms-2" href="">
              <img className="icon" src="./svg/basket.svg" alt="" />
            </a>

            <div className="ms-2 d-xl-none d-flex justify-content-center align-items-center">
              <button className="menu-toggle flex-center">
                <img src="./svg/list.svg" alt="" />
              </button>
            </div>

          </div>

        </div>

      </div>

      <div className="nav-down">
        <div className="d-none d-xl-flex links">
          <a href="">Produkte</a>
          <a href="">Räume</a>
          <a href="">Angebote</a>
          <a href="">Kundenservice</a>
        </div>

        <div id="delivery" className="d-flex d-xl-none align-items-center">
              <div className="link-1 d-flex">
                <img src="./svg/lkw.svg" alt=""/>
                <div className="d-flex flex-column">
                  <div className="text-top">Lieferung</div>
                  <div className="text-bottom">PLZ eingeben</div>
                </div>
              </div>
            </div>

            <div id="opening-hours" className="d-flex d-xl-none align-items-center">
              <div className="link-1 d-flex">
                <img className="black-svg" src="./svg/ikea2.svg" alt=""/>
                <div className="d-flex flex-column">
                  <div className="text-top">Öffnungszeiten</div>
                  <div className="text-bottom">Standort auswählen</div>
                </div>
              </div>
            </div>
      </div>

      <Offcanvas className="offcanvas-left" show={showLeft} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <img className="logo" src="./svg/ikea.svg" alt="" />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <ul className="links-big">
            <li><a href="">Räume</a></li>
            <li><a href="">Angebote</a></li>
            <li><a href="">Kundenservice</a></li>
          </ul>

          <ul className="links-strong">
            <li><a href="">Inspiration & Tipps</a></li>
            <li><a href="">IKEA Family</a></li>
            <li><a href="">IKEA für Unternehmen</a></li>
          </ul>

          <ul className="links">
            <li><a href="">Deine Bestellung</a></li>
            <li><a href="">Dein Profil</a></li>
            <li><a href="">Player & Raumplaner</a></li>
            <li><a href="">Standorte</a></li>
          </ul>

          {/* StrongLinks */}

          {/* Links */}

          {/* Land Ändern */}

        </Offcanvas.Body>
      </Offcanvas>

      <Offcanvas className="offcanvas-right" show={showRight} placement={"end"} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Hej
            <button>Einloggen</button>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>

          <div className="link-1">
            <a href="">
              Werde IKEA Family Mitglied
            </a>
            <button className="flex-center">
              <img src="./svg/chevron-right.svg" alt="" />
            </button>
          </div>

          <div className="link-1">
            <a href="">
            Werde IKEA für Unternehmen Mitglied
            </a>
            <button className="flex-center">
              <img src="./svg/chevron-right.svg" alt="" />
            </button>
          </div>

          <ul className="link-2">
            <li><a href="">Einkäufe</a></li>
            <li><a href="">Merkzettel</a></li>
            <li><a href=""></a>Planungen</li>
            <li><a href=""></a>Bestellungen</li>
          </ul>



        </Offcanvas.Body>
      </Offcanvas>




    </div>
  );
}

export default Navbar1;
