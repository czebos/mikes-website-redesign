
import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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

export default HoursButton;