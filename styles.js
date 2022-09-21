import styled from 'styled-components';

export const Title = styled.h1`
    font-family: sans-serif;
    color: purple;
    font-size: 20px;

    span {
        color: purple;
        display: block;
        font-size: 10px;
        }
`;

export const Btn = styled.button`
    border: 0;
    border-radius: 5px;
    background-color: teal;
    color: purple;
    margin: 10px auto;
    display: block;
    padding: 10px;
    font-size: ${props => `${props.font}px`} ;

    :before {
        content: "${props => `${props.name}`}";
    }

`;