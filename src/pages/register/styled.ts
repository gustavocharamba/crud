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
    }
`

export const RegisterBox = styled.div``

