import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";

import deviceStar from "../images/deviceStar.png";

const Device = observer(() => {
    const { img, name, rating, price } = {
        id: 3,
        name: "IPhone 12 pro",
        price: 80000,
        rating: 5,
        img: "https://static.re-store.ru/upload/resize_cache/iblock/c17/1160_880_17f5c944b3b71591cc9304fac25365de2/c17ffd485dd8adae3cbc7f2f992fa624.jpg",
    };

    const description = [
        { id: 1, title: "Оперативная память", description: "6 гб" },
        { id: 2, title: "Камера", description: "12 мп" },
        { id: 3, title: "Процессор", description: "Ryzen" },
        { id: 4, title: "Кол-во ядер", description: "8" },
        { id: 5, title: "Аккумулятор", description: "4000" },
    ];
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image height={300} src={img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2 style={{ textAlign: "center" }}>{name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center p-5"
                            style={{ background: `url(${deviceStar}) no-repeat center center`, backgroundSize: "contain", fontSize: 64 }}
                        >
                            {rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around" style={{ height: 300 }}>
                        <h3>От: {price.toLocaleString("ru-RU")} руб.</h3>
                        <Button variant="success">Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="mt-3">
                <h2>Характеристики: </h2>
                {description.map(({ id, title, description }, index) => (
                    <Row key={id} style={{ backgroundColor: index % 2 === 0 ? "lightgray" : "transparent" }} className="py-2">
                        {title}: {description}
                    </Row>
                ))}
            </Row>
        </Container>
    );
});

export default Device;
