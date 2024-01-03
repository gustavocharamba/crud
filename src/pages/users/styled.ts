import styled from "styled-components";
import colors from "../../global/globalColors";

export const Container = styled.div`
    height: 100%;
    background-color: ${colors.dark_purple};
    display: flex;
    align-items: center;
    justify-content: center;

    & > div {
        height: 85%;
        width: 45%;
        border-radius: 7%;
        background-color: ${colors.ultra_violet};

        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;

        & > #users_box {
            width: 85%;
            height: 75%;
            margin-bottom: 20px;

            & > .users {
                width: 100%;
                height: 25%;
                border: 1px;
                border-color: ${colors.dark_purple};
                border-style: solid;
                display: flex;
                & > div {
                    width: 100%;
                    height: auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-direction: column;

                    & > p {
                        height: 50%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        flex-direction: column;
                    }
                }
            }
        }
    }
`
export const ButtonsBox = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    & > button {
        width: 25%;
        height: 30%;
        border: 0;
        background: transparent;
    }
`
export const RegisterButtonBox = styled.div`
    width: 20%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Button = styled.button`
    width: 95%;
    height: 75%;
    border-radius: 24px;
    border-width: 0;
    border-style: solid;

`