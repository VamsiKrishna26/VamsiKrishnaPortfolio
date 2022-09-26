import React from "react";
// import './Experience.scss';
import { Fade } from 'react-awesome-reveal';
// import MandS from "../../assets/M&S.jpg";
import Infosys from "../../assets/Infosys.jpg";
import CardDetails from "./CardDetails";
// import { ExperienceDiv } from "./ExperienceStyles";
import styled from "styled-components";

const ExperienceDiv=styled.div`
.experience-page{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: ${props=>props.color};
    padding: 5em 2em 2em 2em;
    margin-top: -1px !important;

    .sub-text{
        color: white !important;
        text-align: center;
    }

    .animate__zoomOut{
        display: none;
    }

}

@media screen and (max-width: 920px) {
    .experience-page{
        padding: 1em;

        .sub-text{
            font-size: 20px !important;
        }

        .card-details{
            margin-top: 1em !important;
            margin-bottom: 1em !important;
        }
    }
}
`;

const Experience = (props) => {

    const { color } = props;

    // const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    // //const [cardIndex,setCardIndex]=useState(-1);

    // useEffect(() => {

    //     const updateWidthDimensions = () => {
    //         const newWidth = window.innerWidth;
    //         setInnerWidth(newWidth);
    //     }
    //     window.addEventListener("resize", updateWidthDimensions);
    //     return () => window.removeEventListener("resize", updateWidthDimensions)
    // }, [])

    const list1 = [Infosys, "Infosys Ltd.", "System Engineer", "Full-Time", "Hyderabad, India.", "November 2019 - August 2021",
        "Scored 87 percent in intensive training in Core technologies, which covered modules such as Python and Core Java, DBMS, Personality Development and Soft-skills, and MEAN stack Development (MongoDB, Express.js, Angular, Node.js).",
        "Developed a Python application from scratch which makes use of multiple Python libraries to scan and mask sensitive details in the various databases like File systems and DBMS.",
		"Worked on other projects such as Web Application development for internal tools using modern JavaScript frameworks.",
        "Under the Infosys Education Platform, I completed various Infosys certifications in Web Development, Java, Python, and Big Data.", "Developed and hosted various MEAN and MERN Web Applications on the Infosys repository."]
    // const list2 = [MandS, "Marks and Spencer", "Customer Assistant", "Part-Time", "Fosse Park, Leicester, UK.", "October 2021 to Present", "Delivering a great shopping experience for customers and proving ‘best in town’ standards."]


    return (
        <ExperienceDiv color={color}>
            <div className="experience-page">
                <Fade direction="up" duration="500">
                    <p className='sub-text'>I have nearly 2 years of professional experience working for the second largest IT company in India.</p>
                </Fade>
                {/* <AiFillCaretLeft onClick={()=>{if(cardIndex===-1){setCardIndex(false);}else{setCardIndex(!cardIndex)}}}/>
            <AiFillCaretRight onClick={()=>{if(cardIndex===-1){setCardIndex(false);}else{setCardIndex(!cardIndex)}}}/> */}
                <Fade direction="up" duration="500">
                    <div className="card-details">
                        <CardDetails detailsList={list1} />
                    </div>

                </Fade>
                <Fade direction="up" duration="500">
                    <p className='sub-text'>I was also employed (October 2020 - Sept 2022) as a Customer Assistant (Part-Time while studying) in the Men's Fashion Department at Marks and Spencer (M&S), Leicester, UK.</p>
                </Fade>
                {/* <CardDetails animationEffect={`${cardIndex===true?`animate__animated animate__zoomIn`: `animate__animated animate__zoomOut`}`} oppositeDirection={true} detailsList={list2}/> */}
            </div>
        </ExperienceDiv>
    )
}

export default Experience;