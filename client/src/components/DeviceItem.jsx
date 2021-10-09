import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

import star from "../images/star.png";
import { DEVICE_ROUTE } from '../utils/consts';

export const DeviceItem = ({ device: {id, img, rating, name} }) => {
    const history = useHistory();

    return (
        <Col md={3} className='mt-4' onClick={() => history.push(`${DEVICE_ROUTE}/${id}`)}>
            <Card style={{ width: 150, cursor: "pointer" }} border="light">
                <Image src={img} />
                <div className="d-flex justify-content-between align-items-center text-black-50 mt-1">
                    <div>Samsung...</div>
                    <div className="d-flex align-items-center">
                        <div className="me-1">{rating}</div>
                        <Image src={star} />
                    </div>
                </div>
                <div>{name}</div>
            </Card>
        </Col>
    );
};
