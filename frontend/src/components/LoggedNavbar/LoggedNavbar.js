import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/logo.png';
import Search from '../../assets/search.svg';

import {
    Nav,
    SearchInput,
    SearchDiv,
} from './styles'

export default function LoggedNavbar() {
    return (
        <Nav>
            <img src={Logo} alt='Logo do reddit' />
            <span>Reddit</span>
            <ul>
                <li>
                    <SearchDiv>
                        <input placeholder='Search for the title' type='text' /> 
                        <span><img src={Search} alt="Search icon"/></span>
                    </SearchDiv>
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