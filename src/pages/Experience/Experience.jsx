import React from "react";
import './Experience.scss';
import { Fade } from 'react-reveal';
// import MandS from "../../assets/M&S.jpg";
import Infosys from "../../assets/Infosys.jpg";
import CardDetails from "./CardDetails";

const Experience = () => {

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
        "Scored 87 percent in four months of intensive training in Core technologies, which covered modules such as Python and Core Java, DBMS, Personality Development and Soft-skills, and MEAN stack Development (MongoDB, Express.js, Angular, Node.js).",
    "Successfully completed a project for a big banking business in America as my client, masking/hiding sensitive data from 100s of tables in accordance with the customer's needs.",
"Under the Infosys Education Platform, I completed various Infosys certifications in Web Development, Java, Python, and Big Data.","Developed and hosted various MEAN and MERN Web Applications on the Infosys repository."]
    // const list2 = [MandS, "Marks and Spencer", "Customer Assistant", "Part-Time", "Fosse Park, Leicester, UK.", "October 2021 to Present", "Delivering a great shopping experience for customers and proving ‘best in town’ standards."]


    return (
        <div className="experience-page">
            <Fade bottom>
                <p className='sub-text'>I have nearly 2 years of professional experience working for the second largest IT company in India.</p>
            </Fade>
            {/* <AiFillCaretLeft onClick={()=>{if(cardIndex===-1){setCardIndex(false);}else{setCardIndex(!cardIndex)}}}/>
            <AiFillCaretRight onClick={()=>{if(cardIndex===-1){setCardIndex(false);}else{setCardIndex(!cardIndex)}}}/> */}
            <Fade bottom>
                <div className="card-details">
                    <CardDetails detailsList={list1} />
                </div>
                
            </Fade>
            <Fade bottom>
                <p className='sub-text'>I am currently employed (October 2020 - Present) as a Customer Assistant (Part-Time) in the Men's Fashion Department at Marks and Spencer (M&S) .</p>
            </Fade>
            {/* <CardDetails animationEffect={`${cardIndex===true?`animate__animated animate__zoomIn`: `animate__animated animate__zoomOut`}`} oppositeDirection={true} detailsList={list2}/> */}
        </div>
    )
}

export default Experience;