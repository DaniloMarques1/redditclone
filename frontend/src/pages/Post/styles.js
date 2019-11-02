import styled from 'styled-components';

export const PostDiv = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 25px;
    
    div {
        width: 96%;
        background: #fff;
        padding: 25px;
        border-radius: 3px;
        min-height: 500px;
        h2 {
            margin-bottom: 10px;
            color: #929191;
        }

    }

    @media (max-width: 700px) {
        padding: 0;
        align-items: flex-start;
        div {
            width: 100%;
            padding: 8px;
            h2 {
                font-size: 20px;
            }
            
        }
        
    }
`

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