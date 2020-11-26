
import React, { useState } from 'react';


import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import HoursButton from './HoursButton'

function Menu() {
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
                Menu
            </Link>
            <HoursButton> </HoursButton>
            <Link to='/contact' className='button'>
                Contact
            </Link>

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

export default Menu;