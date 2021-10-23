import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Context } from "..";

import { BrandBar, DeviceList, TypeBar } from "../components";
import { fetchBrands, fetchTypes, fetchDevices } from "../http/deviceAPI";

const Shop = observer(() => {
    const { device } = useContext(Context);

    useEffect(() => {
        fetchTypes().then((data) => device.setTypes(data));
        fetchBrands().then((data) => device.setBrands(data));
        fetchDevices().then((data) => device.setDevices(data.rows));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>
                    <BrandBar />
                    <DeviceList />
                </Col>
            </Row>
        </Container>
    );
});

export default Shop;
