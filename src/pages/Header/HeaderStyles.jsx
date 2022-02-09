import styled from "styled-components";

export const HeaderDiv=styled.div`
.header {
    background-color: ${props=>props.color};
    opacity: 0.9 !important;
    height: 70px;
    position: fixed;
    z-index: 999;
    padding-left: 3%;
    padding-right: 3%;
    display: flex;
    justify-content: space-between;
    border-radius: 0px 0px 20px 20px;
    width: 100%;

    .my-name {
        flex: 0.20;
        font-family: "Comforter", cursive;
        font-size: 35px;
        color: white;
        align-self: center;
        margin-top: 1em;
        cursor: pointer;
    }

    .options {
        flex: 0.80;
        display: flex;
        width: fit-content;
        align-items: center;
        justify-content: flex-end;

        .option {
            font-family: "Nunito", sans-serif;
            font-size: 23px;
            margin: 0.5em;
            color: white;
            cursor: pointer;
        }
    }
}

@media screen and (max-width: 920px) {
    .header {
        height: 50px;

        .my-name {
            flex: 1;
            font-size: 26px;
        }

        .show-menu {
            flex: 1;
            display: flex;
            justify-content: flex-end;

            .menu-logo {
                height: 30px;
                width: 30px;
                cursor: pointer;
                align-self: center;
            }

            .menu {
                background-color: ${props=>props.color};
                display: flex;
                align-items: center;
                flex-direction: column;
                position: relative;
                overflow: visible;
                z-index: 10;
                position: absolute;
                margin-top: 20px;

                .close-logo {
                    height: 30px;
                    width: 30px;
                    cursor: pointer;
                }

                .option {
                    font-family: "Nunito", sans-serif;
                    font-size: 20px;
                    margin: 0.5em;
                    color: white;
                    cursor: pointer;
                }
            }
        }
    }
}

`;