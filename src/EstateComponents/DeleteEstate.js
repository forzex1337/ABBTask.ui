import React from 'react';
import { Button } from 'react-bootstrap';
import { deleteEstate } from './ApiEstate';

const DeleteEstate = (props) => {
    const handleDelete = async () => {
        await deleteEstate(props.estate);
        props.updateEstates();
    }

    return (
        <Button variant="danger" onClick={handleDelete}>
            Delete
        </Button>
    );
}

export default DeleteEstate;