import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TypeBar } from "../components";

const Shop = () => {
    return (
        <Container>
            <Row className="mt-3">
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col md={9}>456</Col>
            </Row>
        </Container>
    );
};

export default Shop;
