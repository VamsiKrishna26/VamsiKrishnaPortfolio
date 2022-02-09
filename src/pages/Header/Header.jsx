import React, { useState, useEffect } from "react";
// import "./Header.scss";
import Menu from "../../assets/menu.png";
import Close from "../../assets/close.png";
// import { HeaderDiv } from "./HeaderStyles";
// import AnimateHeight from 'react-animate-height';
import styled from "styled-components";

const HeaderDiv=styled.div`
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

const Header = (props) => {
    const { headerVisibility } = props;

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    const [showMenu, setShowMenu] = useState(false);

    const { color } = props;

    useEffect(() => {

        const updateWidthDimensions = () => {
            const newWidth = window.innerWidth;
            setInnerWidth(newWidth);
        }
        window.addEventListener("resize", updateWidthDimensions);
        return () => window.removeEventListener("resize", updateWidthDimensions)
    }, [])




    return (
        <HeaderDiv color={color}>
            <div className={`header ${!headerVisibility ? `animate__animated animate__fadeInDown` : `animate__animated animate__fadeOutUp`}`}>
                <p onClick={() => props.onScrollToChange('Main')} className="my-name">Vamsi Krishna</p>
                {innerWidth > 920 ?
                    <div className="options">
                        <p onClick={() => props.onScrollToChange('Experience')} className="option">Experience</p>
                        <p onClick={() => props.onScrollToChange('Projects')} className="option">Projects</p>
                        <p onClick={() => props.onScrollToChange('Skills')} className="option">Skills</p>
                        <p onClick={() => props.onScrollToChange('About Me')} className="option">About Me</p>
                        <p onClick={() => props.onScrollToChange('Education')} className="option">Education</p>
                        <p onClick={() => props.onScrollToChange('Contact')} className="option">Contact</p>
                    </div> :
                    <div className="show-menu">
                        {!showMenu ? <img src={Menu} className="menu-logo" alt="No alt" onClick={() => setShowMenu(!showMenu)} /> : null}
                        {
                            showMenu ?
                                <div className="menu">
                                    <img src={Close} className="close-logo" alt="No alt" onClick={() => setShowMenu(!showMenu)} />
                                    <p onClick={() => props.onScrollToChange('Experience')} className="option">Experience</p>
                                    <p onClick={() => props.onScrollToChange('Projects')} className="option">Projects</p>
                                    <p onClick={() => props.onScrollToChange('Skills')} className="option">Skills</p>
                                    <p onClick={() => props.onScrollToChange('About Me')} className="option">About Me</p>
                                    <p onClick={() => props.onScrollToChange('Education')} className="option">Education</p>
                                    <p onClick={() => props.onScrollToChange('Contact')} className="option">Contact</p>
                                </div> : null
                        }
                    </div>
                }
            </div>
        </HeaderDiv>
    )
}

export default Header;