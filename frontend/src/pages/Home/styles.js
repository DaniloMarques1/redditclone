import styled from 'styled-components';


export const NewPostButton = styled.button`
    background-color: #fff;
    border: 1px solid #3565B0;
    padding: 8px;
    margin: 10px;
    cursor: pointer;
    border-radius: 4px;
    @media (max-width: 500px) {
        display: table;
        margin: 10px auto;
    }
`
export const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 2fr;
    grid-gap: 40px;
    
    @media (max-width: 800px) {
        grid-template-columns: 3fr 1fr;
        grid-gap: 5px;
    }

    @media (max-width: 500px) {
        grid-template-columns: 1fr;
    }
    
`

export const PostsDiv = styled.div`
    background-color: #fff;
    height: 720px;
    grid-area: 'PostsDiv';
    grid-column-start: 2;
    grid-column-end: 2;
    
    @media (max-width: 800px) {
        grid-column-start: 1;
        grid-column-end: 2;
    }
    
    @media (max-width: 600px) {
        grid-column-start: 1;
        grid-column-end: 2;
    }
`

export const Categories = styled.div`
    grid-column-start: 3;
    grid-column-end: 4;
    height: 500px;
    background-color: #fff;
    display: flex;
    padding: 10px 20px;
    flex-direction: column;
    h3 {
        align-self: center;
    }
    ul {
        list-style: none;
        margin-top: 30px;
    }
    ul li {
        line-height: 25px;
        cursor: pointer;
        color: #3565B0;
    }
    ul li:hover {
        border-bottom: 1px solid #3565B0;
    }
    @media (max-width: 800px) {
        grid-column-start: 2;
        grid-column-end: 3;
    }
    @media (max-width: 600px) {
        display: none;
    }
`