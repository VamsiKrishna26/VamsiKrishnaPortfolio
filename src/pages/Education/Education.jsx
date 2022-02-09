import React, { useEffect, useState } from "react";
import { Fade } from 'react-reveal';
import "./Education.scss";
import { IoIosSchool } from "react-icons/io";
import CardDetails from "./CardDetails";
import {ReactComponent as EducationTop} from '../../assets/EducationTop.svg';
import {ReactComponent as EducationBottom} from '../../assets/EducationBottom.svg';
const Education = (props) => {
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

    const list1 = ["University of Leicester", "MSc in Advanced Computer Science.", "Expecting First Class Degree", "Studying modules like Advanced Web Technologies, Mobile and Web Applications, Big Data, and Predictive Analysis."]
    const list2 = ["Anurag Group of Institutions", "B.Tech in Computer Science and Engineering.", "Scored an overall CGPA of 8.67 out of 10 without any backlogs.", "Completed courses like C, C++ with OOP concepts, Java, Python, Web Technologies, Big Data, Cloud Computing, Machine Learning, DBMS."]
    const list3 = ["Sri Chaitanya Junior College", "An intermediate course in MPC.", "Scored 85%.", "MPC – Mathematics, Physics, and Chemistry."]
    const list4 = ["Sri Chaitanya Techno School", "High School education.", "Scored 9.5 CGPA out of 10.", "Subjects include Maths, Physics, Chemistry, Biology and Social studies"]

    return (
        <div className="education">
            <EducationTop fill={color}/>
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
            <EducationBottom fill={color}/>
        </div>
    )
}

export default Education;