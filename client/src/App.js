import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppRouter, Navigation } from "./components";

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
