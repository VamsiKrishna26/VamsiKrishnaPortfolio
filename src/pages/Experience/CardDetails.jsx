import React, { useState, useEffect } from "react";
import './CardDetails.scss';
import Tilt from 'react-parallax-tilt';
import { Button } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import AnimateHeight from 'react-animate-height';
import { FaHandPointRight } from "react-icons/fa";

const CardDetails = (props) => {
    const { detailsList, oppositeDirection, animationEffect } = props;
    const [showDetails, setShowDetails] = useState(false);

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [showDetails1, setShowDetails1] = useState(false);
    const [arrDir, setArrDir] = useState(false);

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
            <div className={`card-details-exp ${animationEffect} ${oppositeDirection ? `opposite-direction` : ``}`}>
                <div className="image-name container">
                    {
                        innerWidth > 920 ?
                            <div className="card">
                                <div className="img">
                                    <span/>
                                    <span/>
                                    <span/>
                                    <span/>
                                </div>
                                <div className="content">
                                    <h2>Infosys Ltd., Hyderabad, India</h2>
                                </div>
                            </div>
                            :<img src={detailsList[0]} alt="No alt" className="logo-image"/>
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
                                        detailsList.slice(6,).map((point,index)=>
                                        <div key={index}>
                                            <p className="para-text"><FaHandPointRight className="hand-logo"/> {point}</p>
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
                                <p className="sub-text">{detailsList[4]}</p>
                                <p className="image-text">{detailsList[5]}</p>
                                <AnimateHeight duration={2000} height={showDetails1 ? 'auto' : 0}>
                                {
                                        detailsList.slice(6,).map((point,index)=>
                                        <div key={index}>
                                            <p className="para-text"><FaHandPointRight className="hand-logo"/> {point}</p>
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
        </Tilt>
    )
}

export default CardDetails;