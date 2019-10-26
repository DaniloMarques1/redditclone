import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';

import {
    Nav,
    SearchInput
} from './styles'

export default function LoggedNavbar() {
    return (
        <Nav>
            <img src={Logo} alt='Logo do reddit' />
            <span>Reddit</span>
            <ul>
                <li>
                    <SearchInput type='text' />
                </li>
                <li>
                    <Link to='/history'>
                        History
                    </Link>    
                </li>
                <li>
                    <Link onClick={() => localStorage.clear()} to='/login'>
                        Sair   
                    </Link>
                </li>
            </ul>
        </Nav>
    );
}