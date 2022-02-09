import React from "react";
import { Fade } from "react-reveal";
// import "./Skills.scss";
import { TiTick } from "react-icons/ti";
import { VscFileCode } from "react-icons/vsc";
import { FaLaptopCode, FaDatabase } from "react-icons/fa";
import { BsCloud } from "react-icons/bs";
import { SkillsDiv } from "./SkillsDiv";

const Skills = (props) => {

    const {color}=props;
    const core = ["Python", "Java", "HTML", "CSS", "JavaScript"];
    const front_back = ["React.js", "React Native", "Angular", "Node.js and Express.js", "Spring and Spring Boot"]
    const db = ["DBMS and NoSQL", "SQL and MySQL", "MongoDB"]
    const devops = ["Dockers and Kuberenets", "CI/CD Pipelines", "Jenkins", "GitHub", "AWS", "Azure", "Heroku"]
    // const soft = ["Fluent in English and capable of communicating effectively", "Excellent team player who frequently assumed leadership roles in project management.", "Openness to new experiences and adaptability to changing circumstances."]

    return (
        <SkillsDiv color={color}>
            <Fade bottom>
                <p className="heading2">
                    Since the beginning of my career as a Software Developer, both as a student and as an IT professional, I've developed several soft skills such as Effective Communication Skills, Adaptability, and Teamwork.
                    <br/>In addition, owing to all of the peer developers in my life and the internet, I've had acquired a variety of technical abilities.
                </p>
            </Fade>
            <Fade bottom>
                <div className="skill-type">
                    <Fade bottom><p className="heading3">Core Languages:</p></Fade>
                    <div className="skill-icon-fade"><Fade bottom><VscFileCode className="skill-icon" /></Fade></div>
                    {
                        core.map((skill, index) =>
                            <Fade key={index} bottom>
                                <p className="para-text"><TiTick className="tick" /> {skill}</p>
                            </Fade>)
                    }
                </div>
            </Fade>
            <Fade bottom>
                <div className="skill-type">
                    <Fade bottom> <p className="heading3">Web and Mobile:</p></Fade>
                    <div className="skill-icon-fade"><Fade bottom><FaLaptopCode className="skill-icon" /></Fade></div>
                    {
                        front_back.map((skill, index) =>
                            <Fade key={index} bottom>
                                <p className="para-text"><TiTick className="tick" /> {skill}</p>
                            </Fade>)
                    }
                </div>
            </Fade>
            <Fade bottom>
                <div className="skill-type">
                    <Fade bottom><p className="heading3">Databases:</p></Fade>
                    <div className="skill-icon-fade"><Fade bottom><FaDatabase className="skill-icon" /></Fade></div>
                    {
                        db.map((skill, index) =>
                            <Fade key={index} bottom>
                                <p className="para-text"><TiTick className="tick" /> {skill}</p>
                            </Fade>)
                    }
                </div>
            </Fade>
            <Fade bottom>
                <div className="skill-type">
                    <Fade bottom><p className="heading3">Cloud and DevOps:</p></Fade>
                    <div className="skill-icon-fade"><Fade bottom><BsCloud className="skill-icon" /></Fade></div>
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