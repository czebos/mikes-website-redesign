import React, { useState} from 'react';

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

function App() {
    return (
      <div id='app'>
      <div id="top">
          <div id="mikes-container">
              <div id="mikes-title">Mike's Calzones </div>
              <div id="mikes-title-deli">&amp; DELI</div>
          </div>
          <div id="delicious">
              Delicious Starters, Calzones, Wraps, Salads and much more!
        </div>
      </div>

      <div id="buttons">
                <AboutButton> </AboutButton>
                <MenuButton> </MenuButton>
                <HoursButton> </HoursButton>
                <ContactButton> </ContactButton>

      </div>
            <div id="bottom">
                <div id='slogan'>
                    Eat Fun. Eat Fresh.
                 </div>

                <hr/>
                <div id='copyright'>
                    Content copyright 2020. MIKESCALZONES.COM. All rights reserved.


                </div>

            </div>

      </div>


    );
}


function AboutButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class='button' onClick={handleShow}>
                About
        </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function MenuButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class='button' onClick={handleShow}>
                Menu
        </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Menu</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class='item'> 
                        <div class='parts'>
                            <div>
                                <div class='item-name'> Meat Lover</div>
                                <div class='item-description'> Sausage, Peperroni, Meatball, and Bacon. Served with Marinera Sauce.</div>
                            </div>
                            <button class='btn btn-success add-button'> Add to Cart </button>
                        </div>
                    </div>

                    <div class='item'>
                        <div class='parts'>
                            <div>
                                <div class='item-name'> Chicken Parmesan</div>
                                <div class='item-description'> Chicken, Parmesan Cheese, Oregano. Served with Marinera Sauce</div>
                            </div>
                            <button class='btn btn-success add-button'> Add to Cart </button>
                        </div>
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function HoursButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div class='button' onClick={handleShow}>
                Hours
        </div>

            <Modal size='lg' show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Current Hours For Mike's Calzones</Modal.Title>
                </Modal.Header>
                <Modal.Body> <iframe src="https://calendar.google.com/calendar/embed?src=c_a5okmhuvk2lqmrv1oa9irqab8c%40group.calendar.google.com&ctz=America%2FNew_York" style={{ border: 0 }} width="100%" height="600" frameborder="0" scrolling="no"></iframe></Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



function ContactButton() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function handleSend() {
        document.getElementById('loader').style.display='inline'
        setTimeout(function () {
            setShow(false)
        }, 2000);
    }

    return (
        <>
            <div class='button' onClick={handleShow}>
                Contact
        </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Contact Us</Modal.Title>

                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                             </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control placeholder="Enter Message Here" />
                        </Form.Group>

                        <Form.Group controlId="formContactInfo">
                            <div id="contactinfo">Phone Number</div>
                            <div id="contactinfo">(401)-228-8455</div>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Spinner id='loader' animation='border' style={{display: 'none'}}>
                    </Spinner>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="primary" onClick={handleSend}>
                        Send Email
          </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}



export default App;
