import styled from 'styled-components';

export const Main = styled.main `
    display: table;
    margin: 0 auto;
`

export const Form = styled.form `
    background-color: #fff;
    padding: 30px;
    margin-top: 40px;
    border-radius: 3px;
    display: grid;
    grid-gap: 3px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-template-areas: "title category"
                            "content content"
                            ". button";
    
    @media (max-width: 750px) {
        grid-template-columns: 1fr;
        grid-template-areas: "title"
                            "category"
                            "content"
                            "button";
        padding: 10;
    }
   
`

export const DivTitle = styled.div `
    grid-area: title;
`

export const DivCategory = styled.div `
    grid-area: category;
`
export const DivContent = styled.div `
    grid-area: content;
`
export const Content = styled.textarea `
    width: 100%;
    height: 250px;
    padding: 7px;
    border: 1px solid #DEDDDD;
    outline: none;
    @media (max-width: 750px) {
        padding: 3px;
    }
`

export const Button = styled.button `
   float: right;
   margin-right: 10px;
`

export const DivButton = styled.div `
    grid-area: button;
`