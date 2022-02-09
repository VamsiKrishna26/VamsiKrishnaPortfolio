import React, { useEffect, useRef, useState } from "react";
// import './Main.scss';
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
// import { MainDiv } from "./MainStyles";

import styled from "styled-components";

const MainDiv=styled.div`
.main-page {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2%;
    padding-top: 2%;
  
    .text {
      display: flex;
      justify-content: center;
      // align-items: center;
      min-height: 40vh;
  
      .text-left {
        flex: 0.85;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 4em;
  
        .logos {
          display: flex;
  
          .logo {
            height: 40px;
            width: 40px;
            cursor: pointer;
            margin: 0.5em;
          }
  
          .logo:hover {
            animation-name: spin;
            animation-duration: 2s;
            animation-iteration-count: 1;
            animation-fill-mode: forwards;
          }
  
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        }
      }
  
      .animoji-right {
        flex: 0.15;
        display: flex;
        align-items: center;
  
        .image-right{
          background-color: ${props=>props.color};
          border-radius: 50%;
          margin: 3em;
          
  
          .animoji {
            flex: 1;
            height: auto;
            width: 270px;
            border-radius: 50%;
            
          }
        }
        //border: 1px solid red;
      }
    }
  }
  
  @media screen and (max-width: 920px) {
    .main-page{
      .text{
        flex-direction: column;
        min-height: 0vh !important;
  
        .text-left{
          margin: 1em;
  
          .sub-text{
            font-size: 20px !important;
          }
  
          .logos{
            .logo{
              height: 30px;
              width: 30px;
            }
          }
        }
  
        .animoji-right{
          justify-content: center;
  
          .image-right{
            .animoji{
              width: 180px;
            }
          }
        }
      }
    }
  }
  
`;

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
        <MainDiv color={color}>
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
        </MainDiv>
    )

}

export default Main;