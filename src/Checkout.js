import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import  GooglePayButton  from '@google-pay/button-react'

import { printthing, AddGooglePayButton} from './Pay.js'

class CheckoutButton extends React.Component {

    constructor(props) {
        super(props)

        this.state = { show: false }
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose() {
        this.state.show = false;
        this.setState((state, props) => { return {}; })

    }

    handleShow() {
        this.state.show = true;
        this.setState((state, props) => { return {}; })

    }


    render() {
        var renderItems = []
        let total = 0
        for (var key in this.props.inCart) {
            const val = this.props.inCart[key]
            if (val != null) {
                total += val.cost * val.count
                renderItems.push(<div key={val.name} className="list-item">
                    <div className='parts2'>
                        <div>
                            <div className='item-name' > {val.name} ({val.count}) --- ${val.count * val.cost} </div>
                            <div> {val.desc}</div>
                        </div>
                        <div className='buttonContainer'><button className='btn btn-danger add-button' onClick={() => { this.props.removeFromTeam(val.name) }}> Remove From Cart</button> </div>
                    </div>

                </div>)

            }
        }

        return (
            <>
                <div className='btn btn-primary add-button' onClick={this.handleShow}>
                    Checkout
        </div>

                <Modal size='lg' show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className='center'>Order</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="team">

                            {renderItems}
                        </div>
                    </Modal.Body>

                    <Modal.Footer>
                        <div>Total: ${total}</div>
                        <GooglePayButton
                            environment="PRODUCTION"
                            paymentRequest={{
                                apiVersion: 2,
                                apiVersionMinor: 0,
                                allowedPaymentMethods: [
                                    {
                                        type: 'CARD',
                                        parameters: {
                                            allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                            allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                        },
                                        tokenizationSpecification: {
                                            type: 'PAYMENT_GATEWAY',
                                            parameters: {
                                                gateway: 'gateway name',
                                            },
                                        },
                                    },
                                ],
                                merchantInfo: {
                                    merchantId: '123456789101112',
                                    merchantName: 'Demo Merchant',
                                },
                                transactionInfo: {
                                    totalPriceStatus: 'FINAL',
                                    totalPriceLabel: 'Total',
                                    totalPrice: '100.00',
                                    currencyCode: 'USD',
                                    countryCode: 'US',
                                },
                            }}
                            onLoadPaymentData={paymentRequest => {
                                console.log('Success', paymentRequest);
                            }}
                        />
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        );
    }
    
}

export default CheckoutButton;