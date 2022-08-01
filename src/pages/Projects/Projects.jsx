import React, { useState, useEffect } from "react";
// import "./Projects.scss";
import MrMovies from "../../assets/MrMovies.png";
import MrMovies_mobile from "../../assets/MrMovies_mobile.png";
import DocScan from "../../assets/DocScan.png";
import DocScan_mobile from "../../assets/DocScan_mobile.png";
import TravelFeet from "../../assets/TravelFeet.png";
import TravelFeet_mobile from "../../assets/TravelFeet_mobile.png";
import { ReactComponent as ProjectsTop } from '../../assets/ProjectsTop.svg';
import { ReactComponent as ProjectsBottom } from '../../assets/ProjectsBottom.svg';
import { Fade } from "react-awesome-reveal";
import { Button } from "@mui/material";
import { BsCode } from "react-icons/bs";
// import { ProjectsDiv } from "./ProjectsStyles";

import styled from "styled-components";

const ProjectsDiv = styled.div`
.projects{
    margin-top: -1px !important;
    
    .projects-page {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* border:1px solid red; */
        padding-left: 3%;
        padding-right: 3%;
        .sub-text{
            color: ${props=>props.color};
            text-align: center;
        }
    
        .container {
            /* border:1px solid red; */
            overflow: hidden;
            -webkit-perspective: 50em;
            perspective: 50em;
            -webkit-box-sizing: padding-box;
            box-sizing: padding-box;
            -webkit-transition: all 0.2s ease-out;
            transition: all 0.2s ease-out;
            cursor: pointer;
            margin: 2em;
            //border: 1px solid red;
            background-color: ${props=>props.color};
            border-radius: 10px;
    
            .project {
                width: 100%;
                border-radius: 20px;
                //border: 1px solid green;
            }
    
            .fig-caption {
                top: 50%;
                left: 20px;
                right: 20px;
                position: absolute;
                opacity: 0;
                z-index: 1;
                padding: 2em;
                //border: 1px solid black;
            }
        }
    
        .container::after {
            background-color: #ffffff;
            position: absolute;
            content: "";
            display: block;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
            -webkit-transform: rotateX(-90deg);
            transform: rotateX(-90deg);
            -webkit-transform-origin: 50% 50%;
            -ms-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            opacity: 0;
        }
    
        .container:hover {
            .fig-caption {
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                opacity: 1;
                -webkit-transition-delay: 0.2s;
                transition-delay: 0.2s;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
    
                .sub-text{
                    align-self: center;
                }
    
                .para-text{
                    font-size: 18px !important;
    
                    .code-logo{
                        color: ${props=>props.color};
                        width: 18px;
                        height: 18px;
                    }
                }
    
                .button-bs{
                    align-self: center;
                    text-decoration: none;
                    .button{
                        color: ${props=>props.color};
                        border-color: ${props=>props.color};
                    }
                }
            }
        }
    
        .container:hover::after {
            -webkit-transform: rotateX(0);
            transform: rotateX(0);
            opacity: 0.95;
            border-radius: 20px;
            background-color: white;
        }
    }
    
    @media screen and (max-width: 920px) {
        .projects-page{
            .sub-text{
                font-size: 20px !important;
            }
    
            .container{
                margin: 1em !important;
                width: 90%;
            }
        }
    }
    
}
`;

const Projects = (props) => {

    const { color } = props;
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {

        const updateWidthDimensions = () => {
            const newWidth = window.innerWidth;
            setInnerWidth(newWidth);
        }
        window.addEventListener("resize", updateWidthDimensions);
        return () => window.removeEventListener("resize", updateWidthDimensions)
    }, [])

    const mr_movies = ["Mr. Movies", "https://mrmovies.herokuapp.com/", "Mr. Movies is a movie informational website where viewers can know about films, stars, directors, and genres.",
        "Single Page Web Application", "The front-end framework was React.js, the back-end framework was Express.js and Node.js, the databases were MongoDBAtlas and Firebase, and the application was hosted on Heroku."]
    const doc_scan = ["Document Scanner", "https://github.com/VamsiKrishna26/DocumentScanner", "Document Scanner is a smart scanner application that allows you to capture and save any image with text on it, as well as extract the text in the image into a paragraph that can be copied and used anywhere."
        , "Native Mobile app", "Technologies Used - React Native using Expo Framework and Python Django and ML libs."]
    const travel_feet = ["Travel Feet", "", "Travel Feet is a mock travel website where viewers may search for and book packages.", "Single Page Web Application"
        , "The front-end framework was Angular 5, the back-end framework was SpringBoot, the databases were MongoDB and MySQL, and it was hosted in an Infosys private repository."]

    return (
        <ProjectsDiv color={color}>
            <div className="projects">
                <ProjectsTop fill={color} />
                <div className="projects-page">
                    <Fade direction="up" duration="500">
                        <p className="sub-text">I have done many projects on Web and Mobile Development as part of my hobby and University Assingments on various technologies like React.js, Angular and React Native (Expo).</p>
                    </Fade>
                    <Fade direction="up" duration="500">
                        <div className="container">
                            {
                                innerWidth > 768 ? <img src={MrMovies} alt="No Alt" className="project" /> : <img src={MrMovies_mobile} alt="No Alt" className="project" />
                            }
                            <div className="fig-caption">
                                <p className="sub-text">{mr_movies[0]}</p>
                                {
                                    mr_movies.slice(2,).map((point, index) => <p className="para-text" key={index}><BsCode className="code-logo" /> {point}</p>)
                                }
                                <a href={mr_movies[1]} className="button-bs" target="_blank" rel="noreferrer"><Button className="button" variant="outlined">Open Project</Button></a>
                            </div>
                        </div>
                    </Fade>
                    <Fade direction="up" duration="500">
                        <div className="container">
                            {
                                innerWidth > 768 ? <img src={DocScan} alt="No Alt" className="project" /> : <img src={DocScan_mobile} alt="No Alt" className="project" />
                            }
                            <div className="fig-caption">
                                <p className="sub-text">{doc_scan[0]}</p>
                                {
                                    doc_scan.slice(2,).map((point, index) => <p className="para-text" key={index}><BsCode className="code-logo" /> {point}</p>)
                                }
                                <a href={doc_scan[1]} className="button-bs" target="_blank" rel="noreferrer"><Button className="button" variant="outlined">Open Project</Button></a>

                            </div>
                        </div>
                    </Fade>
                    <Fade direction="up" duration="500">
                        <div className="container">
                            {
                                innerWidth > 768 ? <img src={TravelFeet} alt="No Alt" className="project" /> : <img src={TravelFeet_mobile} alt="No Alt" className="project" />
                            }
                            <div className="fig-caption">
                                <p className="sub-text">{travel_feet[0]}</p>
                                {
                                    travel_feet.slice(2,).map((point, index) => <p className="para-text" key={index}><BsCode className="code-logo" /> {point}</p>)
                                }
                                {/* <a href={travel_feet[1]} className="button-bs" target="_blank" rel="noreferrer"><Button className="button" variant="outlined">Open Project</Button></a> */}

                            </div>
                        </div>
                    </Fade>
                    <Fade direction="up" duration="500">
                        <p className="sub-text">For more projects, please visit GitHub!!</p>
                    </Fade>
                </div>
                <ProjectsBottom fill={color} />
            </div>
        </ProjectsDiv>
    )
}

export default Projects;
