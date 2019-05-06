import styled from 'styled-components';

//This is how to create a component without any efffort using "styled-component"
export const ButtonContainer = styled.button`
    background:transparent;
    font-size:1.2rem;
    border:0.05rem solid var(--mainWhite);
    border-radius:0.5rem;
    color:var(--mainWhite);
    margin:0.2rem 0.5rem;
    padding:0.2rem 0.5rem;
    transition: all 0.5 ease-in-out;
    &:hover{
        background:var(--mainWhite);
        color:red;
    }
    &:focus{
        outline:none;
    }      
`;

//export default ButtonContainer;
