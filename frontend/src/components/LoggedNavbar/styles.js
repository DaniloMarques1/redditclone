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
        align-self: center;
        
    }
    ul > li > a {
        text-decoration: none;
        color: black;
    }
    ul > li > a:hover {
        border-bottom: 1px solid #3565B0;
    }

    li img {
        margin: 0;
    }
    
`

export const SearchDiv = styled.div`
    display: flex;
    margin-right: 30px;
    @media (max-width: 500px) {
            display: none;
    }
    img {
        width: 30px;
        height: 30px;
        margin: 0;
        cursor: pointer;
    }

    input {
        border: 1px solid #3565B0;
        color: #3565B0;
        background-color: #fff;
        border-radius: 30px;
        padding: 5px;
        outline: none;
        font-size: 13px;
        margin-right: 5px;
        input::placeholder {
            color: #E7E9EC;
        }
    }
`
