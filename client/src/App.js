import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter } from "react-router-dom";

import { Context } from ".";
import { AppRouter, Navigation } from "./components";
import { check } from "./http/UserAPI";

const App = observer(() => {
    const { user } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check()
            .then((data) => {
                user.setUser(data);
                user.setIsAuth(true);
            })
            .finally(() => setLoading(false));
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (loading) {
        return <Spinner animation="grow" />;
    }

    return (
        <BrowserRouter>
            <Navigation />
            <AppRouter />
        </BrowserRouter>
    );
});

export default App;
