import React, { useState, useEffect } from "react";
import "./Projects.scss";
import MrMovies from "../../assets/MrMovies.jpg";
import MrMovies_mobile from "../../assets/MrMovies_mobile.jpg";
import DocScan from "../../assets/DocScan.jpg";
import DocScan_mobile from "../../assets/DocScan_mobile.jpg";
import TravelFeet from "../../assets/TravelFeet.jpg";
import TravelFeet_mobile from "../../assets/TravelFeet_mobile.jpg";
import { Fade } from "react-reveal";
import { Button } from "@mui/material";
import { BsCode } from "react-icons/bs";

const Projects = () => {

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
        <div className="projects-page">
            <Fade bottom>
                <p className="sub-text">I have done many projects on Web and Mobile Development as part of my hobby and University Assingments on various technologies like React.js, Angular and React Native (Expo).</p>
            </Fade>
            <Fade bottom>
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
            <Fade bottom>
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
            <Fade bottom>
                <div className="container">
                    {
                        innerWidth > 768 ? <img src={TravelFeet} alt="No Alt" className="project" /> : <img src={TravelFeet_mobile} alt="No Alt" className="project" />
                    }
                    <div className="fig-caption">
                    <p className="sub-text">{travel_feet[0]}</p>
                        {
                            travel_feet.slice(2,).map((point, index) => <p className="para-text" key={index}><BsCode className="code-logo" /> {point}</p>)
                        }
                        <a href={travel_feet[1]} className="button-bs" target="_blank" rel="noreferrer"><Button className="button" variant="outlined">Open Project</Button></a>

                    </div>
                </div>
            </Fade>
            <Fade bottom>
                <p className="sub-text">For more projects, please visit GitHub!!</p>
            </Fade>
        </div>
    )
}

export default Projects;
