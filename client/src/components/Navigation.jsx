import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Nav, Navbar, Container, Image, Button } from "react-bootstrap";

import { Context } from "..";
import logo from "../images/PERN_LOGO_RGB-300x99.png";

export const Navigation = observer(() => {
    const { user } = useContext(Context);
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <Image style={{ maxHeight: "60px" }} src={logo} />
                </Navbar.Brand>
                {user.isAuth ? (
                    <Nav className="ml-auto">
                        <Button variant="secondary">Админ панель</Button>
                        <Button variant="secondary" className="ms-4">
                            Войти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto">
                        <Button variant="secondary" onClick={() => user.setIsAuth(true)}>
                            Авторизация
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});
