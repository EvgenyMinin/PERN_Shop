import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Nav, Navbar, Container, Image, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { Context } from "..";
import logo from "../images/PERN_LOGO_RGB-300x99.png";
import { ADMIN_ROUTE, LOGIN_ROUTE } from "../utils/consts";

export const Navigation = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();

    const logOutHandler = () => {
        user.setUser({});
        user.setIsAuth(false);
    };

    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="/">
                    <Image style={{ maxHeight: "60px" }} src={logo} />
                </Navbar.Brand>
                {user.isAuth ? (
                    <Nav className="ml-auto">
                        <Button variant="secondary" onClick={() => history.push(ADMIN_ROUTE)}>
                            Админ панель
                        </Button>
                        <Button variant="secondary" onClick={logOutHandler} className="ms-4">
                            Выйти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto">
                        <Button variant="secondary" onClick={() => history.push(LOGIN_ROUTE)}>
                            Авторизация
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});
