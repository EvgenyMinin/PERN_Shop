import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bootstrap";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
    const { pathname } = useLocation();
    const isLogin = pathname === LOGIN_ROUTE;
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Card style={{ width: 600 }} className="p-5 mt-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control className="mt-3" placeholder="Введите ваш email..." />
                    <Form.Control className="mt-3" type="password" placeholder="Введите ваш пароль..." />
                    <div className="d-flex justify-content-between mt-3 align-items-center">
                        {isLogin ? (
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                            </div>
                        ) : (
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        )}

                        <Button variant="outline-success">{isLogin ? 'Войти' : 'Регистрация'}</Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
