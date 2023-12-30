import styled from "styled-components";
import colors from "../../global/globalColors";

export const Container = styled.div`
    height: 100%;
    background-color: ${colors.dark_purple};
    display: flex;
    align-items: center;
    justify-content: center;

    #user_box {
        height: 85%;
        width: 45%;
        border-radius: 24px;
        background-color: ${colors.ultra_violet};

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

    }
`