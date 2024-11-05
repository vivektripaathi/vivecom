import React from "react";
import {useNavigate } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/");
    };

    return (
        <div id="navbar-container">
            <div id="icon" onClick={handleClick}>🛍️ VIVECOM</div>
        </div>
    );
}

export default Navbar;
