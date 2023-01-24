import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { getEstates, updateEstate } from './ApiEstate';
import CreateEstate from './CreateEstate';
import EditEstate from './EditEstate';
import DeleteEstate from './DeleteEstate';
import moment from 'moment';

const Estate = () => {
    const [estates, setEstates] = useState([]);

    const fetchData = async () => {
        const response = await getEstates();
        setEstates(response);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleUpdate = async (id, estate) => {
        await updateEstate(id, estate);
        fetchData();
    }

    return (
    <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Created Date</th>
                        <th>Expiration Date</th>
                        <th>Modification Date</th>
                        <th>Is Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {estates.map((estate, index) => (
                        <tr key={index}>
                            <td>{estate.id}</td>
                            <td>{estate.name}</td>
                            <td>{estate.description}</td>
                            <td>{estate.price}</td>
                            <td>{moment(estate.createdDate).format('YYYY-MM-DD')}</td>
                            <td>{moment(estate.expirationDate).format('YYYY-MM-DD')}</td>
                            <td>{moment(estate.modificationDate).format('YYYY-MM-DD')}</td>
                            <td>{estate.isSold ? 'Yes' : 'No'}</td>
                            <td><EditEstate estate={estate} updateEstates={fetchData} /></td>
                            <td><DeleteEstate estate={estate.id} updateEstates={fetchData} /></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <CreateEstate updateEstates={fetchData} />
        </>
    );
};
export default Estate;