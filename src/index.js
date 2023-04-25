import React from "react";
import ReactDOM from "react-dom";
import MainPage from "./Components/MainPage/MainPage";
import TestPage from "./Components/TestPage/TestPage";
import './index.css';

function Test() {
    return (
        <MainPage />
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Test />
    </React.StrictMode>
)

export const renderTest = () => {
    root.render(
        <React.StrictMode>
            <TestPage />
        </React.StrictMode>
    );
}