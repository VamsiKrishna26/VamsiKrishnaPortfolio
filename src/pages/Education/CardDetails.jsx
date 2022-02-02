import React, { useState,useEffect } from 'react';
import { Card } from "react-bootstrap";
import { AiFillCaretRight } from "react-icons/ai";
import './CardDetails.scss';
import { IoIosArrowDown } from "react-icons/io";
import AnimateHeight from 'react-animate-height';
const CardDetails = (props) => {

    const { detailsList } = props;

    const [showDetails, setShowDetails] = useState(false);
    const [arrDir,setArrDir]=useState(false);


    return (
        <div className='card-details'>
            <Card className='card-class'>
                <Card.Body className="timeline-content">
                    <p className="heading2">{detailsList[0]}</p>
                    <p className="sub-text"><AiFillCaretRight />{detailsList[1]}</p>
                    <AnimateHeight duration={1000} height={showDetails?'auto':0}>
                        {
                            detailsList.slice(2).map(
                                (item, index) => <p className='para-text' key={index}><AiFillCaretRight />{item}</p>
                            )
                        }
                    </AnimateHeight>
                    <IoIosArrowDown className={`plus-icon ${arrDir?`plus-icon-down`:``}`} 
                    onClick={() => {setShowDetails(!showDetails);setArrDir(!arrDir);}}/>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CardDetails;