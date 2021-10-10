import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import { CreateModal } from "../components";

const Admin = () => {
    const [visibleBrandModal, setVisibleBrandModal] = useState(false);
    const [visibleDeviceModal, setVisibleDeviceModal] = useState(false);
    const [visibleTypeModal, setVisibleTypeModal] = useState(false);

    return (
        <Container className="d-flex flex-column">
            <Button variant="outline-dark" className="mt-3" onClick={() => setVisibleTypeModal(true)}>
                Добавить тип
            </Button>
            <Button variant="outline-dark" className="mt-3" onClick={() => setVisibleBrandModal(true)}>
                Добавить бренд
            </Button>
            <Button variant="outline-dark" className="mt-3" onClick={() => setVisibleDeviceModal(true)}>
                Добавить устройство
            </Button>
            <CreateModal title="Добавить бренд" placeholder="Введите название бренда" show={visibleBrandModal} onHide={() => setVisibleBrandModal(false)} />
            <CreateModal title="Добавить устройство" placeholder="Введите название устройства" show={visibleDeviceModal} onHide={() => setVisibleDeviceModal(false)} />
            <CreateModal title="Добавить тип" placeholder="Введите название типа" show={visibleTypeModal} onHide={() => setVisibleTypeModal(false)} />
        </Container>
    );
};

export default Admin;
