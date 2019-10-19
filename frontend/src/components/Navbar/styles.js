import styled from 'styled-components';

export const Nav = styled.nav `
    display: flex;
    background-color: #fff;
    padding: 8px;
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
        list-style: none;
        align-self: center;
        margin-left: auto;
    }

    ul>li {
        margin: 0 10px;
    }

    ul>li:hover {
        border-bottom: 1px solid #3565B0;
        cursor: pointer;
    }
    ul>li>a {
        text-decoration: none;
        color: #000;
    }
`