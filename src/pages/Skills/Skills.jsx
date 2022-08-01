import React from "react";
import { Fade } from "react-awesome-reveal";
// import "./Skills.scss";
import { TiTick } from "react-icons/ti";
import { VscFileCode } from "react-icons/vsc";
import { FaLaptopCode, FaDatabase } from "react-icons/fa";
import { BsCloud } from "react-icons/bs";
// import { SkillsDiv } from "./SkillsDiv";
import styled from "styled-components";

const SkillsDiv=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -1px !important;
    padding-bottom: 2em;
    flex-wrap: wrap;

    .heading2{
        color: white !important;
        background-color: ${props=>props.color};
        text-align: center;
        font-size: 26px;
        padding: 3em 1em 1em 1em;
    }

    .skill-type{
        display: flex;
        flex-direction: column;
        margin: 1em;
        min-height: 500px;
        min-width:270px;
        padding: 1.5em;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 20px;

        

        .heading3{
            color: ${props=>props.color};
        }

        .skill-icon-fade{
            align-self: center;

            .skill-icon{
                color: ${props=>props.color};
                height: 50px;
                width: 50px;
                //border: 1px solid red;
                margin-bottom: 1em;
            }
        }

        .tick{
            color: ${props=>props.color};
            height: 16px;
            width: 16px;
        }
    }

    @media screen and (max-width: 920px) {
    .heading2{
        font-size: 20px !important;
    }

    .skill-type{

        min-height: 300px !important;
        min-width: 250px !important;

        .heading3{
            font-size: 28px !important;
        }

        .para-text{
            font-size: 15px !important;
        }
    }
}
`;

const Skills = (props) => {

    const {color}=props;
    const core = ["Python", "Java", "HTML", "CSS", "JavaScript"];
    const front_back = ["React.js", "React Native", "Angular", "Node.js and Express.js", "Spring and Spring Boot"]
    const db = ["DBMS and NoSQL", "SQL and MySQL", "MongoDB"]
    const devops = ["Dockers and Kuberenets", "CI/CD Pipelines", "Jenkins", "GitHub", "AWS", "Azure", "Heroku"]
    // const soft = ["Fluent in English and capable of communicating effectively", "Excellent team player who frequently assumed leadership roles in project management.", "Openness to new experiences and adaptability to changing circumstances."]

    return (
        <SkillsDiv color={color}>
            <Fade direction="up" duration="500">
                <p className="heading2">
                    Since the beginning of my career as a Software Developer, both as a student and as an IT professional, I've developed several soft skills such as Effective Communication Skills, Adaptability, and Teamwork.
                    <br/>In addition, owing to all of the peer developers in my life and the internet, I've had acquired a variety of technical abilities.
                </p>
            </Fade>
            <Fade direction="up" duration="500">
                <div className="skill-type">
                    <Fade direction="up" duration="500"><p className="heading3">Core Languages:</p></Fade>
                    <div className="skill-icon-fade"><Fade direction="up" duration="500"><FaLaptopCode className="skill-icon" /></Fade></div>
                    {
                        core.map((skill, index) =>
                            <Fade key={index} bottom>
                                <p className="para-text"><TiTick className="tick" /> {skill}</p>
                            </Fade>)
                    }
                </div>
            </Fade>
            <Fade direction="up" duration="500">
                <div className="skill-type">
                    <Fade direction="up" duration="500"><p className="heading3">Web and Mobile:</p></Fade>
                    <div className="skill-icon-fade"><Fade direction="up" duration="500"><VscFileCode className="skill-icon" /></Fade></div>
                    {
                        front_back.map((skill, index) =>
                            <Fade key={index} bottom>
                                <p className="para-text"><TiTick className="tick" /> {skill}</p>
                            </Fade>)
                    }
                </div>
            </Fade>
            <Fade direction="up" duration="500">
                <div className="skill-type">
                    <Fade direction="up" duration="500"><p className="heading3">Databases:</p></Fade>
                    <div className="skill-icon-fade"><Fade direction="up" duration="500"><FaDatabase className="skill-icon" /></Fade></div>
                    {
                        db.map((skill, index) =>
                            <Fade key={index} bottom>
                                <p className="para-text"><TiTick className="tick" /> {skill}</p>
                            </Fade>)
                    }
                </div>
            </Fade>
            <Fade direction="up" duration="500">
                <div className="skill-type">
                    <Fade direction="up" duration="500"><p className="heading3">Cloud and DevOps:</p></Fade>
                    <div className="skill-icon-fade"><Fade direction="up" duration="500"><BsCloud className="skill-icon" /></Fade></div>
                    {
                        devops.map((skill, index) =>
                            <Fade key={index} bottom>
                                <p className="para-text"><TiTick className="tick" /> {skill}</p>
                            </Fade>)
                    }
                </div>
            </Fade>

        </SkillsDiv>
    )
}

export default Skills;