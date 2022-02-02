import React, { useRef, useEffect } from "react";
import useOnScreen from "../../useOnScreen";
import "./Contact.scss";
import LinkedIn from "../../assets/linkedin.svg";
import GitHub from "../../assets/github.svg";
import Email from "../../assets/email.svg";
import Resume from "../../assets/resume.svg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import CV from "../../assets/VamsiKrishnaPalaparti_CV.pdf";

const Contact = (props) => {

    const ref = useRef();
    const isVisible = useOnScreen(ref);

    useEffect(() => {
        props.onVisibilityChange1(isVisible);
    }, [isVisible, props])

    return (
        <div className="contact-page">
            <p className="heading2">Get in Touch!</p>
            <p className="para-text">Since I am currently pursuing a Master's degree in the United Kingdom and will graduate in September 2022,
                I am searching for Graduate or Work opportunities in Software or Web Development in UK. <br /><br />If you want to get in touch with me, please contact through my email or LinkedIn.
                <br /><br />Thank you for taking the time to check out my portfolio. Cheers!</p>
            <div className='logos' ref={ref}>
                <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>LinkedIn</Tooltip>}>
                    <a href="https://www.linkedin.com/in/vamsi-krishna-palaparti" target="_blank" rel="noreferrer"><img className="logo" src={LinkedIn} alt="No Alt" /></a>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>GitHub</Tooltip>}>
                    <a href="https://github.com/VamsiKrishna26" target="_blank" rel="noreferrer"><img className='logo' src={GitHub} alt="No alt" /></a>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Email Me</Tooltip>}>
                    <a href="mailto:vamsi26081997@gmail.com" target="_blank" rel="noreferrer"><img className="logo email" src={Email} alt="No Alt" /></a>
                </OverlayTrigger>
                <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Download my Resume</Tooltip>}>
                    <a href={CV} download="Vamsi Krishna CV.pdf" target="_blank" rel="noreferrer"><img className="logo email" src={Resume} alt="No Alt" /></a>
                </OverlayTrigger>
            </div>
        </div>
    )
}

export default Contact;