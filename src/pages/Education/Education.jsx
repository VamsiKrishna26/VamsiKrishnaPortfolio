import React, { useEffect, useState } from "react";
import { Fade } from 'react-reveal';
// import "./Education.scss";
import { IoIosSchool } from "react-icons/io";
import CardDetails from "./CardDetails";
import { ReactComponent as EducationTop } from '../../assets/EducationTop.svg';
import { ReactComponent as EducationBottom } from '../../assets/EducationBottom.svg';
// import { EducationDiv } from "./EducationStyles";

import styled from "styled-components";

const EducationDiv=styled.div`
.education{
    margin-top: -1px !important;
    
    .education-page {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        
    
        .heading1{
            color: ${props=>props.color};
        }
    
        .timeline {
            width: 90%;
            height: auto;
            max-width: 1000px;
            margin: 0 auto;
            position: relative;
    
            ul {
                list-style: none;
    
                li {
                    border-radius: 10px;
                    margin-bottom: 40px;
    
                    .timeline-content {
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
    
    @media only screen and (min-width: 768px) {
        .timeline {
            margin: 0px !important;
            ul {
                li {
                    width: 50%;
                    position: relative;
    
                    .li-icon {
                        height: 30px;
                        width: 30px;
                        position: absolute;
                        z-index: 10;
                        color: white;
                        background-color: ${props=>props.color};
                        border-radius: 30px;
                    }
    
                    .li-date{
                        position: absolute;
                        z-index: 10;
                    }
                }
    
                li:nth-child(odd) {
                    float: left;
                    clear: right;
                    transform: translateX(-40px);
    
                    .li-icon {
                        transform: translate(50%, 0%);
                        right: -40px;
                    }
    
                    .li-date{
                        transform: translate(50%, 0%);
                        right: -300px;
                    }
                }
    
                li:nth-child(even) {
                    float: right;
                    clear: left;
                    transform: translateX(40px);
                    .li-icon {
                        transform: translate(-50%, -50%);
                        left: -40px;
                    }
                    .li-date{
                        transform: translate(-50%, -50%);
                        left: -300px;
                    }
                }
    
                li:hover {
                    .li-icon {
                        color: ${props=>props.color};
                        background-color: white;
                    }
                }
            }
        }
    
        .timeline::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 10px;
            background-color: ${props=>props.color};
            left: 51.5%;
            transform: translateX(-51.5%);
        }
    }
    
    @media only screen and (max-width: 767px) {
        .timeline {
            
            ul {
                li {
                    width: 100%;
                    position: relative;
                }
    
                .li-icon {
                    height: 30px;
                    width: 30px;
                    position: absolute;
                    z-index: 10;
                    color: white;
                    background-color: ${props=>props.color};
                    border-radius: 30px;
                    left: -45px;
                }
            }
        }
    
        .timeline::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 5px;
            background-color: ${props=>props.color};
            left: 0%;
            transform: translateX(0%);
        }
    
        li:hover {
            .li-icon {
                color: ${props=>props.color};
                background-color: white;
            }
        }
    }
    
}
`;

const Education = (props) => {
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

    const list1 = ["University of Leicester", "MSc in Advanced Computer Science.", "Grade: 83% in Semester 1. Expecting to maintain the same overall throughout the year.", "Studying modules like Advanced Web Technologies, Mobile and Web Applications, Big Data, and Predictive Analysis."]
    const list2 = ["Anurag Group of Institutions", "B.Tech in Computer Science and Engineering.", "Scored an overall CGPA of 8.67 out of 10 without any backlogs.", "Completed courses like C, C++ with OOP concepts, Java, Python, Web Technologies, Big Data, Cloud Computing, Machine Learning, DBMS."]
    const list3 = ["Sri Chaitanya Junior College", "An intermediate course in MPC.", "Scored 85%.", "MPC – Mathematics, Physics, and Chemistry."]
    const list4 = ["Sri Chaitanya Techno School", "High School education.", "Scored 9.5 CGPA out of 10.", "Subjects include Maths, Physics, Chemistry, Biology and Social studies"]

    return (
        <EducationDiv color={color}>
            <div className="education">
                <EducationTop fill={color} />
                <div className="education-page">
                    <Fade bottom>
                        <p className='heading1'>Education</p>
                    </Fade>
                    <div className="timeline">
                        <ul>
                            <li>
                                <Fade bottom>
                                    <IoIosSchool className="li-icon" />
                                    <p className="para-text li-date">Sept 2021 – Sept 2022.</p>
                                    <CardDetails detailsList={list1} />
                                </Fade>
                            </li>
                            <li>
                                <Fade bottom>
                                    <IoIosSchool className="li-icon" />
                                    <p className="para-text li-date">July 2015 – April 2019.</p>
                                    <CardDetails detailsList={list2} />
                                </Fade>
                            </li>
                            <li>
                                <Fade bottom>
                                    <IoIosSchool className="li-icon" />
                                    <p className="para-text li-date">July 2013 – April 2015.</p>
                                    <CardDetails detailsList={list3} />
                                </Fade>
                            </li>
                            <li>
                                <Fade bottom>
                                    <IoIosSchool className="li-icon" />
                                    <p className="para-text li-date"> April 2013.</p>
                                    <CardDetails detailsList={list4} />
                                </Fade>
                            </li>
                        </ul>
                    </div>
                </div>
                <EducationBottom fill={color} />
            </div>
        </EducationDiv>
    )
}

export default Education;