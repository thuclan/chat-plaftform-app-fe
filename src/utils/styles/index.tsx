import styled from 'styled-components';

export const InputField = styled.input`
   font-family: 'Inter';
   outline: none;
   border: none;
   background-color: inherit;
   color: #fff;
   font-size: 18px;
   width: 100%;
   padding: 0;
`;

export const InputContainer = styled.div`
    background-color: #131313;
    padding: 12px 16px;
    border-radius: 10px;
    width:100%;
    box-sizing: border-box;
`;

export const InputLabel = styled.label`
    display: block;
    color: #8f8f8f;
    font-size: 14px;
    margin: 4px 0;
`;

export const Button = styled.button`
    width: 100%;
     background-color: #2b09ff;
     color: #fff;
     font-size: 16px;
     border: none;
     border-radius: 10px;
     padding:24px 0;
`;

export const Page = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    color: #fff;
    align-items: center;
`;
