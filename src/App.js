import React, { useState} from 'react';

import './App.css';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import HoursButton from './HoursButton'
import Menu from './Menu'
import Contact from './Contact'

import img1 from './img/img1.jpg'
import calzone1 from './img/calzone1.jpg'
import calzone2 from './img/calzone2.jpg'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/menu">
                    <Menu/>
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
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
                            <Link to='/' className='button'>
                                About
                            </Link>
                            <Link to='/menu' className='button'>
                                Menu
                            </Link>
                            <HoursButton> </HoursButton>
                            <Link to='/contact' className='button'>
                                Contact
                            </Link>

                        </div>

                        <div className="page">
                            <div className='welcome'>
                                Welcome to Mike's Calzones!
                            </div>
                            <div className='img-cont'> <img className='welcome-img' src={img1} /></div>
                            <div className='about-para'>
                                Hungry? Looking for an affordable and satisfying meal? <br></br> <br></br>
                                The East Side has a wonderful new place for you. Mike's Calzones & Deli. <br></br> <br></br>

                                Choose from a wide assortment of calzones, wraps, subs and more! 
                                Select from the menu or build your own. Whether browsing the East Side or just pausing for a few moments, Mike's Calzones is the place for you.
                            </div>

                            <div className='about-imgs'>
                                <img className='about-img' src={calzone1} />
                                <img className='about-img' src={calzone2} />
                            </div>

                            <div className='about-para'>
                                The delicious food, friendly service and comfortable setting makes it the perfect stop for lunch or dinner!
                            </div>
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
                </Route>
        </Switch>
    </BrowserRouter>

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
