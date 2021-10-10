import React, { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";

import { Context } from "..";

export const CreateModal = ({ title, placeholder, show, onHide }) => {
    const { device } = useContext(Context);
    const [info, setInfo] = useState([]);

    const addInfo = () => {
        setInfo([...info, { title: "", description: "", number: Date.now() }]);
    };

    const removeInfo = (number) => {
        setInfo(info.filter((item) => item.number !== number));
    };

    return (
        <Modal show={show} onHide={onHide} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    {title === "Добавить устройство" ? (
                        <>
                            <Dropdown className="my-3">
                                <Dropdown.Toggle>Выберите тип</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {device.types.map(({ id, name }) => (
                                        <Dropdown.Item key={id}>{name}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown className="my-3">
                                <Dropdown.Toggle>Выберите бренд</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {device.brands.map(({ id, name }) => (
                                        <Dropdown.Item key={id}>{name}</Dropdown.Item>
                                    ))}
                                </Dropdown.Menu>
                            </Dropdown>
                            <Form.Control className="mt-3" placeholder="Введите название устройства" />
                            <Form.Control className="mt-3" type="number" />
                            <Form.Control className="mt-3" type="file" />
                            <hr />
                            <Button variant="outline-dark" onClick={addInfo}>
                                Добавить новое свойство
                            </Button>
                            {info.map(({ number }) => (
                                <Row key={number} className="mt-3">
                                    <Col md={4}>
                                        <Form.Control placeholder="Введите название устройства" />
                                    </Col>
                                    <Col md={4}>
                                        <Form.Control placeholder="Введите описание устройства" />
                                    </Col>
                                    <Col md={4}>
                                        <Button variant="outline-danger" onClick={() => removeInfo(number)}>Удалить</Button>
                                    </Col>
                                </Row>
                            ))}
                        </>
                    ) : (
                        <Form.Control placeholder={placeholder} />
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>
                    Закрыть
                </Button>
                <Button variant="outline-success" onClick={onHide}>
                    Добавить
                </Button>
            </Modal.Footer>
        </Modal>
    );
};
