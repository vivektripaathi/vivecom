import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductListPage from "./components/ProductListPage";

import "./App.css";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/products" element={<ProductListPage />} />
            </Routes>
        </Router>
    );
}

export default App;
