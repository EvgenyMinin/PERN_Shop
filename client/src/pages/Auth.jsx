import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { Button, Card, Container, Form } from "react-bootstrap";

import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/UserAPI";
import { Context } from "..";

const Auth = observer(() => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { user } = useContext(Context);
    const history = useHistory();
    const { pathname } = useLocation();
    const isLogin = pathname === LOGIN_ROUTE;

    const signIn = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);

                console.log("data", data);
            }

            user.setUser(user);
            user.setIsAuth(true);
            history.push(SHOP_ROUTE);
        } catch (e) {
            alert(e.response.data.message);
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center">
            <Card style={{ width: 600 }} className="p-5 mt-5">
                <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} className="mt-3" placeholder="Введите ваш email..." />
                    <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} className="mt-3" type="password" placeholder="Введите ваш пароль..." />
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

                        <Button variant="outline-success" onClick={signIn}>
                            {isLogin ? "Войти" : "Регистрация"}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
