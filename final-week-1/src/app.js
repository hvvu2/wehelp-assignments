import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./reset.css";
import "./style.scss";
import HomePage from "./pages/HomePage";
import ListPage from "./pages/ListPage";

class App extends React.Component {
    render() {
        return (
            <Router>
                <Routes>
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/list" element = {<ListPage />} />
                </Routes>
            </Router>
        );
    }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
