import styled from "styled-components";
import colors from "../../global/globalColors";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: ${colors.english_violet_opaque};
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        height: 60%;
        width: 35%;
        background-color: ${colors.dark_purple};
        border-radius: 7%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Form = styled.form`
    height: 90%;
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    & > h4 {
        width: 80%;
        height: 5%;
        color: white;
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }
`
export const Input = styled.input`
    height: 13%;
    width: 85%;
    border-radius: 24px;
    margin-bottom: 24px;
    padding-left: 10px;
    outline: none;
    font-size: 14px;
`
export const Button = styled.button`
    height: 10%;
    width: 55%;
    border-radius: 32px;

`