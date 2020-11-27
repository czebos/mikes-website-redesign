
import React, { useState } from 'react';


import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';

import HoursButton from './HoursButton'
import CheckoutButton from './Checkout'
import Cookies from 'universal-cookie';

const cookies = new Cookies();
cookies.set('cart', {}, {path: '/'})


var starters = [
    { name: 'Garlic Bread', cost: 1.99 },
    { name: 'French Fries', cost: 3.70 },
    { name: 'Curly Fries', cost: 4.63 },
    { name: 'Cheese Fries', cost: 5.55 },
    { name: 'Southwestern Eggrolls', cost: 6.49 },
    { name: 'Chicken Wings (8)', desc: 'with Ranch or Blue Cheese', cost: 6.99 },
    { name: 'Boneless Wings (8)', desc: 'with Ranch or Blue Cheese', cost: 6.99 },
    { name: 'Soda', desc: 'or Spring Water', cost: 1.85 },
]

var calzones = [
    { name: 'BBQ Chicken Calzone', desc: 'Fried/Grilled', cost: 8.34 },
    { name: 'Buffalo Chicken Calzone',cost: 8.34 },
    { name: 'Chicken Alfredo Calzone', cost: 8.34 },
    { name: 'Ham and Cheese Calzone', cost: 8.34 },
    { name: 'Hawaiian Calzone', desc: "Ham and Pineapple", cost: 8.34 },
    { name: 'Italian Calzone', cost: 8.34 },
    { name: 'Meat Lover Calzone', desc: 'Sausage, Pepperoni, Meatball, Bleu Cheese or Ranch', cost: 8.34 },
    { name: 'Mediterranean Calzone', desc:'Ricotta, Spinach, Tomato, Olives & Feta', cost: 8.34 },
    { name: 'Meltdown Calzone', desc: 'American, Provolone, Cheddar, Ricotta', cost: 8.34 },
    { name: 'Veggie Lovers Calzone', desc: 'Spinach, Tomato,Olives, Broccoli, Onions, Green Peppers, Mushrooms',cost: 8.34 },
]

var wraps = [
    { name: 'BBQ Chicken Wrap', desc: 'Fried/Grilled', cost: 6.94 },
    { name: 'BLT Wrap', desc: 'Mayo, Bacon, Lettuce, and Tomato', cost: 6.94 },
    { name: 'Chicken Caesar Wrap', cost: 6.94 },
    { name: 'Chicken Parm', cost: 6.94 },
    { name: 'Italian Wrap', desc: 'Mozzarela, Ham, and Salami', cost: 6.94 },
]

var salads = [
    { name: 'Caesar Salad', cost: 5.50 },
    { name: 'Garden Salad', cost: 6.49 },
    { name: 'Tuna Salad', cost: 8.34 },
    { name: 'Gyro Salad', cost: 8.34 },
    { name: 'Grilled Chicken Salad', cost: 8.34 },
]


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
                Order
            </Link>
            <HoursButton> </HoursButton>
            <Link to='/contact' className='button'>
                Contact
            </Link>

        </div>

        <OrderMenu/>

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

class OrderMenu extends React.Component {

    // Constructer, sets state
    constructor(props) {
        super(props)

        this.state = { inCart: cookies.get('cart') }

        this.addToCart = this.addToCart.bind(this);
        this.removeFromTeam = this.removeFromTeam.bind(this);

    }

    // Called by filter buttons

    // Adds to aggregator
    addToCart(name, cost) {
        if (this.state.inCart[name] == null) {
            this.state.inCart[name] = { name: name, cost: cost, count: 1 }
        } else {
            this.state.inCart[name].count += 1
        }

        cookies.set('cart', this.state.inCart, { path: '/' })


        this.setState((state, props) => { return {}; })
    }

    // Removes from aggregator
    removeFromTeam(name) {
        if (this.state.inCart[name].count == 1) {
            this.setState((state, props) => {
                state.inCart[name] = null
                cookies.set('cart', this.state.inCart, { path: '/' })
                return {
                    inCart: state.inCart
                };
            })
        } else {
            this.state.inCart[name].count -= 1
        }
        cookies.set('cart', this.state.inCart, { path: '/' })
        this.setState((state, props) => { return {}; })

    }

    // Renders Selector, Aggregator and List
    render() {
        // Sort if necearry

        // Render list item object
        const renderItem = (props) => {
            return (<ListItem key={props.name} addToCart={this.addToCart}name={props.name} desc={props.desc} cost={props.cost}> </ListItem>);
        }

        return (
            // Render selector
            <div>
                <div className="page">
                    <div className="menu-title">
                        Starters
                    </div>
                    <div className='orange-line' />
                    {starters.map(renderItem)}
                    <div className="menu-title">
                        Calzones
                    </div>
                    <div className='orange-line' />
                    {calzones.map(renderItem)}
                    <div className="menu-title">
                        Wraps And Subs
                    </div>
                    <div className='orange-line' />
                    {wraps.map(renderItem)}
                    <div className="menu-title">
                        Salads
                    </div>
                    <div className='orange-line' />
                    {salads.map(renderItem)}
                    <Cart inCart={this.state.inCart} removeFromTeam={this.removeFromTeam} add={this.addToTeam}></Cart>
                </div>
            </div>); // Render List and  Aggregator
    }
}

// Component for one of the items in the list
class ListItem extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        // If fits category, filter, otherwise render null
        if (((this.props.weight_filter == this.props.weight || this.props.weight_filter == 'all') && (this.props.diff_filter == this.props.diff || this.props.diff_filter == 'all'))) {
            return (<div key={this.props.name} className="item">
                <div className='parts'>
                    <div>
                        <div class='item-name'> {this.props.name} --- {this.props.cost} </div>
                        <div class='item-description'> {this.props.desc}</div>
                    </div>
                    <div className='buttonContainer'><button onClick={() => { this.props.addToCart(this.props.name, this.props.cost) }} className='btn btn-success add-button'> Add to Cart </button> </div>
                </div>
            </div>);
        }
        else {
            return null;
        }
    }

}

// Aggregator
class Cart extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "https://pay.google.com/gp/p/js/pay.js";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        // Render all of the list items in the current state of the aggregator, and calculate average tier
        var renderItems = []
        let total = 0
        for (var key in this.props.inCart) {
            const val = this.props.inCart[key]
            if (val != null) {
                total += val.cost * val.count
                renderItems.push(<div key={val.name} className="list-item">
                    <div class='parts'>
                        <div>
                            <div class='item-name'> {val.name} ({val.count}) --- ${val.count * val.cost} </div>
                            <div class='item-description'> {val.desc}</div>
                        </div>
                        <div className='buttonContainer'><button className='btn btn-danger add-button' onClick={() => { this.props.removeFromTeam(val.name) }}> Remove From Cart</button> </div>
                    </div>
                   
                </div>)

            }
        }
        return (
            <div>
                <div className="title">
                    In Cart
                </div>
                <div className='orange-line' />
                <div>

                    {renderItems}
                </div>
                <div className='orange-line' />
                <div className="list-item">
                    <div class='parts'>
                        <div>
                            <div class='item-name'> Total: ${total} </div>
                        </div>
                        <div className='buttonContainer'><CheckoutButton removeFromTeam={this.props.removeFromTeam} inCart={this.props.inCart} /></div>
                </div>

                </div>
            </div>
        );
    }
}
export default Menu;