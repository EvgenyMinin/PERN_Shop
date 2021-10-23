import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

import deviceStar from "../images/deviceStar.png";
import { fetchDeviceById } from "../http/deviceAPI";

const Device = () => {
    const [device, setDevice] = useState({ info: [] });
    const { id } = useParams();

    useEffect(() => {
        fetchDeviceById(id).then((data) => setDevice(data));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image height={300} src={`${process.env.REACT_APP_API_URL}/${device.img}`} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 style={{ textAlign: "center" }}>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center p-5"
                            style={{ background: `url(${deviceStar}) no-repeat center center`, backgroundSize: "contain", fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around" style={{ height: 300 }}>
                        <h3>От: {device.price?.toLocaleString("ru-RU")} руб.</h3>
                        <Button variant="success">Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <h2>Характеристики: </h2>
                {device.info?.map(({ id, title, description }, index) => (
                    <Row key={id} style={{ backgroundColor: index % 2 === 0 ? "lightgray" : "transparent" }} className="py-2">
                        {title}: {description}
                    </Row>
                ))}
            </Row>
        </Container>
    );
};

export default Device;
