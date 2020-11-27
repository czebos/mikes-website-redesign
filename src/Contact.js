
import React, { useState } from 'react';

import { FaPhone, FaHome, FaMailBulk } from 'react-icons/fa'


import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import HoursButton from './HoursButton'



function Contact() {
    return (<div id='app'>
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
                Order
            </Link>
            <HoursButton> </HoursButton>
            <Link to='/contact' className='button'>
                Contact
            </Link>

        </div>

        <div className='page'>
            <div className='welcome'>
                Contact us
             </div>
            <div style={{ display: 'flex' }}>
                <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fmikescalzones%2Fphotos%2Fa.972960996047457%2F1191886427488245%2F&show_text=true&width=552&appId=475415519147708&height=607" width="320" height="340" style={{ border: 'none; overflow: hidden', color: "white" }} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <div className="contact-info">
                    <div style={{ display: 'block' }}>
                        <div className='num'> </div>
                        <FaPhone size={35} />
                        <div className='num'> +1 (401)-228-8455 </div>
                        <FaHome size={35} />
                        <div className='num'> 288 Thayer Street, Providence, RI  02906 </div>
                        <FaMailBulk size={35} />
                        <div className='num'> mikescalzone@gmail.com </div>
                    </div>
                </div>
            </div>
            
        </div>

        <div className='page'>
            <div className='welcome'>
                Send us a Message
             </div>
            <Form>
                <Form.Row>

                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className='form' controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control placeholder="Enter email" />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="formMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control rows={5} as='textarea' placeholder="Hello, My name is ..." />
                </Form.Group>

                <div className='right'>
                <Button variant="primary" type="submit">
                        Send Message
                </Button>
                </div>
            </Form>
        </div>

        <div id="bottom">
            <div id='slogan'>
                Eat Fun. Eat Fresh.
                                </div>

            <hr />
            <div id='copyright'>
                Content copyright 2020. MIKESCALZONES.COM. All rights reserved.


                            </div>

        </div>

    </div>)
}

export default Contact;