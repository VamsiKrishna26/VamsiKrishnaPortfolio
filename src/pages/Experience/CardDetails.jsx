import React, { useState, useEffect } from "react";
// import './CardDetails.scss';
import Tilt from 'react-parallax-tilt';
import { Button } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import AnimateHeight from 'react-animate-height';
import { FaHandPointRight } from "react-icons/fa";
// import { CardDetailsDiv } from "./CardDetailsDiv";

import styled from "styled-components";
import Infosys from "../../assets/Infosys.jpg";

const CardDetailsDiv=styled.div`
.card-details-exp {
    //border: 1px solid red;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    border-radius: 40px;
    //box-shadow: -6px -6px 20px rgba(255, 255, 255, 1), 6px 6px 20px rgba(0, 0, 0, 0.1);
    padding: 40px 30px;
    width: 60em;
    margin:2em;


    .heading2 {
        font-size: 30px !important;
    }

    .heading3 {
        font-size: 30px !important;
        color: ${props=>props.color};
    }

    .sub-text {
        font-size: 18px !important;
    }

    .para-text {
        font-size: 16px !important;

        .hand-logo{
            color: ${props=>props.color};
            height: 16px;
            width: 16px;
        }
    }

    .image-text{
        font-size: 24px;
        color: black;
    }

    .image-name {
        flex: 1;
        //border: 1px solid blue;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        .card {
            //border-radius: 16px;
            width: 360px;
            height: 360px;
            background: url();
            position: relative;
            background-repeat: no-repeat;
            background-size: cover;
            overflow: hidden;
            box-shadow: 0 5px 50px rgba(#000, 0.85);

            &:before {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                background-color: rgba(white, 0.8);
            }

            .img {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                display: flex;
                span {
                    width: 25%;
                    height: 100%;
                    background: url(${Infosys});
                    background-repeat: no-repeat;
                    background-size: cover;
                    transition: 0.5s;
                    &:nth-child(1) {
                        background-position: 0;
                        transition-delay: 0;
                    }
                    &:nth-child(2) {
                        background-position: 33.33333%;
                        transition-delay: 0.2s;
                    }
                    &:nth-child(3) {
                        background-position: 66.66666%;
                        transition-delay: 0.4s;
                    }
                    &:nth-child(4) {
                        background-position: 100%;
                        transition-delay: 0.6s;
                    }
                }
            }
        }

        .card:hover {
            .img > span {
                transform: translateY(-100%);
            }
            .content {
                transform: translateY(0%);
                transition: 1s;
                transition-delay: 0.2s;
            }
        }

        .content {
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: black;
            padding: 20px 20px;
            width: 100%;
            height: 100%;
            transform: translateY(100%);
        }

        .link {
            border-bottom: 1px solid transparent;
            color: #06c0a8;
            text-decoration: none;
            transition: ease-in 0.13s;
            &:hover {
                background-color: #06c0a8;
                color: #ffffff;
            }
        }
    }

    .card-details-mobile {
        flex: 1;
        display: flex;
        flex-direction: column;

        .plus-icon {
            align-self: center;
            cursor: pointer;
            height: 20px;
            width: 20px;
        }

        .plus-icon-down {
            animation-name: rotateIcon;
            animation-duration: 1s;
            animation-fill-mode: forwards;
        }

        .plus-icon-up {
            animation-name: rotateIcon;
            animation-duration: 1s;
            animation-fill-mode: forwards;
        }

        @keyframes rotateIcon {
            to {
                transform: rotate(180deg);
            }
        }
    }
    .card-details-flip {
        flex: 3;
        width: 300px;
        height: 300px;
        perspective: 1000px;

        .card-details-inner {
            position: relative;
            width: 100%;
            height: 100%;
            //text-align: center;
            transition: transform 0.8s;
            transform-style: preserve-3d;

            .card-details-front {
                height: 100%;
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
                //border: 1px solid red;
                padding: 1em;
            }

            .card-details-back {
                padding: 1em;
                //border: 1px solid red;
                height: 100%;
                width: 100%;
                transform: rotateY(180deg);
                display: flex;
                flex-direction: column;
                justify-content: center;

                .para-text{
                    text-align: justify;
                }
            }

            .card-details-front,
            .card-details-back {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden; /* Safari */
                backface-visibility: hidden;
            }
        }
    }

    .card-details-flip-flip {
        .card-details-inner {
            transform: rotateY(180deg);
        }
    }
}

.btn {
    margin: auto;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    position: relative;

    &::before {
        transition: all 0.45s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        content: "";
        width: 100%;
        height: 100%;
        background: black;
        position: absolute;
        top: 0;
        left: 0;
    }

    & .btn-text {
        color: white;
        // check out mdn docs for different types of blend modes.
        mix-blend-mode: difference;
    }

    &:hover {
        &::before {
            background: white;
            width: 100%;
        }
    }
}

.card-details-exp:hover {
    box-shadow: inset -6px -6px 10px rgba(255, 255, 255, 0.5), inset 6px 6px 20px rgba(0, 0, 0, 0.05);
}

.opposite-direction {
    flex-direction: row-reverse;
}

.logo-image {
    width: 250px;
    height: 100%;
}

@media screen and (max-width: 920px) {
    .card-details-exp {
        margin: 0em !important;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        padding: 15px 7.5px !important;
        width: 20em;

        .image-name{
            padding: 0px !important;
        }

        .card-details-mobile{

            .heading2 {
                font-size: 28px !important;
            }
        
            .heading3 {
                font-size: 28px;
            }
        
            .sub-text {
                font-size: 18px;
                color: #000;
            }

            .image-text{
                font-size: 20px;
            }

            .para-text{
                text-align: justify;
            }
        }
    }
}

`;

const CardDetails = (props) => {
    const { detailsList, oppositeDirection, animationEffect } = props;
    const [showDetails, setShowDetails] = useState(false);

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [showDetails1, setShowDetails1] = useState(false);
    const [arrDir, setArrDir] = useState(false);
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
        <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={3000} gyroscope={true}>
            <CardDetailsDiv color={color} >
                <div className={`card-details-exp ${animationEffect} ${oppositeDirection ? `opposite-direction` : ``}`}>
                    <div className="image-name container">
                        {
                            innerWidth > 920 ?
                                <div className="card">
                                    <div className="img">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <div className="content">
                                        <h2>Infosys Ltd., Hyderabad, India</h2>
                                    </div>
                                </div>
                                : <img src={detailsList[0]} alt="No alt" className="logo-image" />
                        }
                    </div>
                    {
                        innerWidth > 920 ?
                            <div className={`card-details-flip ${showDetails ? `card-details-flip-flip` : ``}`}>
                                <div className="card-details-inner">
                                    <div className="card-details-front">
                                        <p className="heading2">{detailsList[1]}</p>
                                        <p className="heading3"><b>Role:</b> {`${detailsList[2]} (${detailsList[3]})`}</p>
                                        {/* <p className="sub-text">{detailsList[4]}</p> */}
                                        <p className="image-text">{detailsList[5]}</p>
                                        <Button variant="outlined" className="btn" onClick={() => setShowDetails(!showDetails)}>
                                            <span className="btn-text">More Details</span>
                                        </Button>
                                    </div>
                                    <div className="card-details-back">
                                        {
                                            detailsList.slice(6,).map((point, index) =>
                                                <div key={index}>
                                                    <p className="para-text"><FaHandPointRight className="hand-logo" /> {point}</p>
                                                </div>
                                            )
                                        }
                                        <Button variant="outlined" className="btn" onClick={() => setShowDetails(!showDetails)}>
                                            <span className="btn-text">Back</span>
                                        </Button>
                                    </div>
                                </div>
                            </div> :
                            <div>
                                <div className="card-details-mobile">
                                    <p className="heading2">{detailsList[1]}</p>
                                    <p className="heading3">{`${detailsList[2]} (${detailsList[3]})`}</p>
                                    <p className="image-text">{detailsList[4]}</p>
                                    <p className="image-text">{detailsList[5]}</p>
                                    <AnimateHeight duration={2000} height={showDetails1 ? 'auto' : 0}>
                                        {
                                            detailsList.slice(6,).map((point, index) =>
                                                <div key={index}>
                                                    <p className="para-text"><FaHandPointRight className="hand-logo" /> {point}</p>
                                                </div>
                                            )
                                        }
                                    </AnimateHeight>
                                    <IoIosArrowDown className={`plus-icon ${arrDir ? `plus-icon-down` : ``}`}
                                        onClick={() => { setShowDetails1(!showDetails1); setArrDir(!arrDir); }} />
                                </div>
                            </div>
                    }
                </div>
            </CardDetailsDiv>
        </Tilt>
    )
}

export default CardDetails;