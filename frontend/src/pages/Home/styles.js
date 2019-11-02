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
    a {
        text-decoration: none;
        color: #000;
    }
`
export const Section = styled.div`
    display: grid;
    grid-template-columns: 1fr 5fr 2fr;
    grid-template-areas: '. PostsDiv Categories';
    grid-gap: 30px;
    

    @media (max-width: 1000px) {
        grid-template-columns: 2fr 1fr;
        grid-gap: 5px;
        grid-template-areas: 'PostsDiv Categories';
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-areas: 'CategoriesSelect CategoriesSelect CategoriesSelect'
                            'PostsDiv PostsDiv PostsDiv';
    }
    
`

export const PostsDiv = styled.div`
    background-color: #fff;
    height: 720px;
    grid-area: PostsDiv;
    border-radius: 4px;
    @media (max-width: 800px) {

    }
    
    @media (max-width: 600px) {

    }
    h1 {
        text-align: center;
        margin-top: 15px;
    }
`

export const Categories = styled.div`
    grid-area: Categories;
    height: 500px;
    background-color: #fff;
    display: flex;
    padding: 10px 20px;
    flex-direction: column;
    border-radius: 4px;
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
    }
    ul li:hover {
        border-bottom: 1px solid #3565B0;
    }
    @media (max-width: 800px) {

    }
    @media (max-width: 600px) {
        display: none;
    }
`

export const Post = styled.div`
    padding: 15px;
   
    h3 {
        margin-bottom: 10px;
        color: #929191;
        cursor: pointer;
    }
    h3:hover {
        color: #605D5D;
        transition: all .3s;
    }
    div {
        border-radius: 3px;
        border: 1px solid #E7E9EC;
        padding: 12px;
    }
    span {
        font-size: 12px;
        color: #39A038;
    }
    p{
        font-size: 14px;
    }
    margin-bottom: 10px;

    @media (max-width: 600px) {
        h3 {
            font-size: 16px;
        }
        p {
            font-size: 12px;
        }
    }
`

export const CategoriesSelect = styled.select `
    grid-area: CategoriesSelect;
    
    border: 1px solid #DEDDDD;
    outline: none;
    padding: 10px;
    display: block;
    background-color: #fff;
    border-radius: 4px;
    width: 100%;

    @media (min-width: 600px) {
        display: none;
    }
`