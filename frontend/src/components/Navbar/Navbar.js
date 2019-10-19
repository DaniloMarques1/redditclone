import React from 'react';
import {Link} from 'react-router-dom';
import {
    Nav,
} from './styles';

import Logo from '../../assets/logo.png';

export default function Navbar() {
    return (
        <Nav>
            <img src={ Logo } alt='Logo' />   
            
            <span>Reddit</span>
            <ul>
                <li>
                    <Link to='/register'>Sign up</Link>
                </li>
                <li>
                    <Link to='/login'>Sign in</Link>
                </li>
            </ul>
        </Nav>
    )
}