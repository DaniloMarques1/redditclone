import styled from 'styled-components';

export const Container = styled.form`
    height: 90vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const FormContainer = styled.div`
    background-color: #fff;
    padding: 60px 100px;
    border-radius: 4px;
`

export const Input = styled.input `
    display: block;
    border: 1px solid #DEDDDD;
    border-radius: 2px;
    padding: 10px;
    margin-bottom: 10px;
    color: #3565B0;
    width: 300px;
    ::placeholder {
        color: #B1ACAC;
    }
    :focus{
        outline: none;
    }
    
`

export const Label = styled.label `
    font-size: 14px;
`

export const Button = styled.button `
    background-color: #fff;
    border: 1px solid #3565B0;
    color: #3565B0;
    padding: 10px;
    cursor: pointer;
    float: right;
`

