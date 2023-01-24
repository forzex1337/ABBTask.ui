import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { updateEstate } from './ApiEstate';
import moment from 'moment';



const EditEstate = (props) => {
    const [show, setShow] = useState(false);
    const [estate, setEstate] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEstate({ ...estate, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await updateEstate(estate);
        props.updateEstates();
        setShow(false);
    }

    useEffect(() => {
        setEstate(props.estate);
    }, [props.estate]);

    return (
        <>
            <Button variant="warning" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Estate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="Name" defaultValue={estate.name} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="Description" defaultValue={estate.description} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="Price" defaultValue={estate.price} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formCreatedDate">
                            <Form.Label>Created Date</Form.Label>
                            <Form.Control type="date" name="CreatedDate" defaultValue={moment(estate.createdDate).format('YYYY-MM-DD')} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formExpirationDate">
                            <Form.Label>Expiration Date</Form.Label>
                            <Form.Control type="date" name="ExpirationDate" defaultValue={moment(estate.expirationDate).format('YYYY-MM-DD')} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formModificationDate">
                            <Form.Label>Modification Date</Form.Label>
                            <Form.Control type="date" name="ModificationDate" defaultValue={moment(estate.modificationDate).format('YYYY-MM-DD')} onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formIsSold">
                            <Form.Check type="checkbox" label="Is Sold" name="IsSold" defaultChecked={estate.isSold} onChange={handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditEstate;