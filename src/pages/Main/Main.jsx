import React, { useEffect, useRef, useState } from "react";
import './Main.scss';
import 'animate.css';
import TypeWriterEffect from 'react-typewriter-effect';
import {ReactComponent as LinkedIn} from '../../assets/linkedin.svg';
import {ReactComponent as GitHub} from '../../assets/github.svg';
import {ReactComponent as Email} from "../../assets/email.svg";
import {ReactComponent as Resume} from "../../assets/resume.svg";
import useOnScreen from "../../useOnScreen";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Animoji from "../../assets/Animoji.png";
import CV from "../../assets/VamsiKrishnaPalaparti_CV.pdf";

const Main = (props) => {
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

    const ref = useRef();
    const isVisible = useOnScreen(ref);

    const ref1 = useRef();
    const isVisibleMain = useOnScreen(ref);

    useEffect(() => {
        props.onVisibilityChange(isVisible);
    }, [isVisible, props])

    useEffect(() => {
        props.onVisibilityChangeMain(isVisibleMain);
    }, [isVisibleMain, props])

    const hi_list = ["Hi There!", "Bonjour!", "Namaste!", "Guten tag!", "Ciao!", "Nǐ hǎo!", "Hi There!"]

    const hi_style = { fontFamily: 'Josefin Sans', fontSize: '45px', fontWeight: 'bold', color: 'black' }
    const name_style = { fontFamily: 'Arvo', fontSize: '40px', fontWeight: 'bold', color: 'black' }

    const hi_style_mobile = { fontFamily: 'Josefin Sans', fontSize: '25px', fontWeight: 'bold', color: 'black' }
    const name_style_mobile = { fontFamily: 'Arvo', fontSize: '20px', fontWeight: 'bold', color: 'black' }

    const name_style1 = { fontSize: '50px' }
    const name_style1_mobile = { fontSize: '25px' }

    return (
        <div>
            <div className="main-page" ref={ref1}>
                <div className="text">
                    <div className="text-left" style={{ width: 'fit-content' }}>
                        <TypeWriterEffect
                            textStyle={innerWidth > 768 ? hi_style : hi_style_mobile} startDelay={100} cursorColor="black"
                            multiText={hi_list}
                            loop={true} nextTextDelay={500} typeSpeed={50}
                        />
                        <p style={innerWidth > 768 ? name_style : name_style_mobile}>I'm {innerWidth < 768 ? <br /> : null}<span style={innerWidth > 768 ? name_style1 : name_style1_mobile}>Vamsi Krishna Palaparti</span></p>
                        <p className='sub-text'>Software Developer | Student at University of Leicester | United Kingdom</p>

                        <div className='logos' ref={ref}>
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>LinkedIn</Tooltip>}>
                                <a href="https://www.linkedin.com/in/vamsi-krishna-palaparti" target="_blank" rel="noreferrer"><LinkedIn fill={color} className="logo email"/></a>
                            </OverlayTrigger>
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>GitHub</Tooltip>}>
                                <a href="https://github.com/VamsiKrishna26" target="_blank" rel="noreferrer"><GitHub fill={color} className="logo email"/></a>
                            </OverlayTrigger>
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Email Me</Tooltip>}>
                                <a href="mailto:vamsi26081997@gmail.com" target="_blank" rel="noreferrer"><Email fill={color} className="logo email"/></a>
                            </OverlayTrigger>
                            <OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Download my Resume</Tooltip>}>
                                <a href={CV} download="Vamsi Krishna CV.pdf" target="_blank" rel="noreferrer"><Resume fill={color} className="logo email"/></a>
                            </OverlayTrigger>

                        </div>
                    </div>
                    <div className="animoji-right">
                        <div className="image-right">
                            <img src={Animoji} alt="No alt" className="animoji" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default Main;