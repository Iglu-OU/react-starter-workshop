import React from 'react';

import {Link} from "react-router-dom";

import Container from "../container/container";

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <Container>
                <nav className="nav">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                </nav>
            </Container>
        </div>
    );
}

export default Header;
