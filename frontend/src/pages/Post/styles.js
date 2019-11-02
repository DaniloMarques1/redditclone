import styled from 'styled-components';

export const PostDiv = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
`

export const Container = styled.div `
    
    width: 96%;
    background: #fff;
    padding: 25px;
    border-radius: 3px;
    min-height: 500px;
    h2 {
        margin-bottom: 10px;
        color: #929191;
    }

    
    @media (max-width: 700px) {
            padding: 0;
            align-items: flex-start;
            width: 100%;
                padding: 8px;
                h2 {
                    font-size: 20px;
                }
        }
`;

export const Content = styled.p `
    width: 700px;
    border: 1px solid #DEDDDD;
    border-radius: 6px;
    padding: 10px;
    font-size: 14px;
    line-height: 24px;
    @media (max-width: 700px) {
        line-height: 18px;
        padding: 8px;
        width: 100%;
        font-size: 12px;
    }
`;

export const Comments = styled.div `
    margin-top: 30px;
    padding: 10px 12px 20px 12px;
    border: 1px solid #DEDDDD;
    border-radius: 3px;

`;

export const FormGroup = styled.form `
    display: flex;
    flex-direction: column;
    width: 90%;
    button {
        align-self: flex-end;
        font-size: 14px;
        border: none;
        outline: none;
        background-color: #fff;
        border: 1px solid #3565B0;
        padding: 8px;
        border-radius: 2px;
        cursor: pointer;
        color: #3565B0;

        @media (max-width: 600px) {
            padding: 5px;
            font-size: 12px;
        }
    }
`;

export const InputComment = styled.input `
    width: 100%;
    display: block;
    outline: none;
    border: 1px solid #DEDDDD;
    border-radius: 3px;
    padding: 12px;
    font-size: 12px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const CommentsDiv = styled.div `
    margin-top: 9px;
    border: 1px solid #DEDDDD;
    padding: 6px;
    color: #7D7B7B;
    p {
        font-size: 14px;
        margin-bottom: 3px;
    }
    span {
        font-size: 12px;
        color: #39A038;
    }

`;