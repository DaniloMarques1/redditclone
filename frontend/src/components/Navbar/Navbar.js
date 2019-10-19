import React from 'react';

import {
    Nav
} from './styles';

import Logo from '../../assets/logo.png';

export default function Navbar() {
    return (
        <Nav>
            <img src={ Logo } alt='Logo' />
        </Nav>
    )
}