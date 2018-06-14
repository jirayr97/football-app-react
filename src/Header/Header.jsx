import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => (
    <div className="header">
        <div className="link"><Link to="/">HOME</Link></div>
        <div className="link"><Link to="/news">NEWS</Link></div>

    </div>
);
export default Header;