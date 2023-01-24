import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createEstate } from './ApiEstate';

const CreateEstate = (props) => {
    const [show, setShow] = useState(false);
    const [estate, setEstate] = useState({
        Name: '',
        Description: '',
        Price: 0,
        IsSold: false
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setEstate({ ...estate, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await createEstate(estate);
        props.CreateEstate();
        setShow(false);
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Create
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Estate</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="Name" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="text" name="Description" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control type="number" name="Price" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formCreatedDate">
                            <Form.Label>Created Date</Form.Label>
                            <Form.Control type="date" name="CreatedDate" onChange={handleChange} />
                        </Form.Group>
                        <Form.Group controlId="formIsSold">
                            <Form.Check type="checkbox" label="Is Sold" name="IsSold" value={estate.IsSold} onChange={(event) => setEstate({ ...estate, IsSold: event.target.checked })}
                            />
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

export default CreateEstate;