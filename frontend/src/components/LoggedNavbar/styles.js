import styled from 'styled-components';

export const Nav = styled.nav `
    background-color: #fff;
    padding: 8px;
    display: flex;
    span {
        align-self: center;
    }
    img {
        width: 30px;
        height: 30px;
        margin: 4px;
    }
    ul {
        display: flex;
        align-self: center;
        margin-left: auto;
    }
    ul > li {
        list-style: none;
        margin: 0 12px;
        
    }
    ul > li > a {
        text-decoration: none;
        color: black;
    }
    ul > li > a:hover {
        border-bottom: 1px solid #3565B0;
    }
    
`

export const SearchInput = styled.input `
    border: 1px solid #3565B0;
    background-color: #fff;
    
`