import React, { useEffect, useState } from "react";
import { Fade } from 'react-reveal';
// import './About.scss';
import graduationPicture from '../../assets/graduation-photo.png';
// import { AboutDiv } from "./AboutStyles";

import styled from 'styled-components';

const AboutDiv=styled.div`
    background-color: ${props=>props.color};
    padding: 3em;
    margin-top: -2px !important;

    .about-page-body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-left: 2em;
        margin-right: 2em;

        .heading1{
            color: white !important;
        }

        .text-photo {
            display: flex;
            align-items:center;
            justify-content: space-between;

            .about-me {
                //flex: 3;
                //border: 1px solid red;
                text-align: justify;
                text-justify: inter-word;
                margin-right: 1em;
                color: white;
            }

            .div-graduation-image {
                //flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                min-width: 20%;

                .graduation-image {
                    border-radius: 8px;
                    max-width: 100%;
                    margin-bottom: 2em;
                    //border: 1px solid blue;
                }
            }
        }
    }
    }

    @media screen and (max-width: 920px) {
        padding: 0em !important;
        
        .about-page-body {
            margin-left: 1em;
            margin-right: 1em;
        }

        .text-photo {
            flex-direction: column !important;
            
            .about-me {
                margin-right: 0em !important;
            }

            .div-graduation-image {
                .graduation-image {
                    max-width: 80% !important;
                }
            }
        }
`;

const About = (props) => {

    const {color}=props;
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {

        const updateWidthDimensions = () => {
            const newWidth = window.innerWidth;
            setInnerWidth(newWidth);
        }
        window.addEventListener("resize", updateWidthDimensions);
        return () => window.removeEventListener("resize", updateWidthDimensions)
    }, [])

    return (
        <AboutDiv color={color}>
            <div className='about-page-body'>
                <Fade bottom>
                    <p className='heading1'>About Me</p>
                </Fade>
                
                <div className="text-photo">
                    <Fade bottom>
                        <p className='para-text about-me'>
                            I am a Software Developer and currently a student at University of Leicester pursuing MSc in Advanced Computer Science.
                            I was born in Hyderabad, India and I have done all my schooling and college there.
                            As a child, I was always in fascination about technology.
                            The newest inventions and latest innovations of technology has drawn me into the field of computers gradually.
                            I joined Computer Science and Engineering course in Anurag Group of Institutions and I have taken my passion for technology to the next level through coding and programming the software.
                            As a student there, I learned many technical skills like Java & Python and also many interpersonal skills like team-working and problem-solving.
                            After successful graduation, I have joined Infosys Ltd as a Systems Engineer where I have worked for nearly 2 years on various projects.
                            To deepen my knowledge and gain a qualification, I moved to UK to pursue the Masters degree.
                            <br /><br />
                            {
                                innerWidth > 768 ?
                                    <span>The photo on the right is me at my Graduation Day, 2019.</span> :
                                    null
                            }
                        </p>
                    </Fade>
                    <Fade bottom>
                        <div  className="div-graduation-image">
                            <img src={graduationPicture} className="graduation-image" alt="No Alt" />
                            {
                                innerWidth < 768 ?
                                    <p className='para-text about-me'>
                                        Me at my Graduation Day, 2019.
                                    </p> : null
                            }
                        </div>
                    </Fade>

                </div>
            </div>
        </AboutDiv>
    )
}

{/* <p className='heading2'>About Me</p>
                <p className='heading3'>About Me</p>
                <p className='sub-text'>About Me</p>
                <p className='image-text'>About Me</p>
                <p className='para-text'>About Me</p> */}

export default About;