import React, { useEffect, useState } from "react";
import { Fade } from 'react-reveal';
import './About.scss';
import graduationPicture from '../../assets/graduation-photo.png';

const About = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {

        const updateWidthDimensions = () => {
            const newWidth = window.innerWidth;
            setInnerWidth(newWidth);
        }
        window.addEventListener("resize", updateWidthDimensions);
        return () => window.removeEventListener("resize", updateWidthDimensions)
    }, [])

    return (
        <div className='about-page'>
            <div className='about-page-body'>
                <Fade bottom>
                    <p className='heading1'>About Me</p>
                </Fade>
                
                <div className="text-photo">
                    <Fade bottom>
                        <p className='para-text about-me'>
                            I am a Software Developer and currently a student at University of Leicester pursuing MSc in Advanced Computer Science.
                            I was born in Hyderabad, India and I have done all my schooling and college there.
                            As a child, I was always in fascination about technology.
                            The newest inventions and latest innovations of technology has drawn me into the field of computers gradually.
                            I joined Computer Science and Engineering course in Anurag Group of Institutions and I have taken my passion for technology to the next level through coding and programming the software.
                            As a student there, I learned many technical skills like Java & Python and also many interpersonal skills like team-working and problem-solving.
                            After successful graduation, I have joined Infosys Ltd as a Systems Engineer where I have worked for nearly 2 years on various projects.
                            To deepen my knowledge and gain a qualification, I moved to UK to pursue the Masters degree.
                            <br /><br />
                            {
                                innerWidth > 768 ?
                                    <span>The photo on the right is me at my Graduation Day, 2019.</span> :
                                    null
                            }
                        </p>
                    </Fade>
                    <Fade bottom>
                        <div  className="div-graduation-image">
                            <img src={graduationPicture} className="graduation-image" alt="No Alt" />
                            {
                                innerWidth < 768 ?
                                    <p className='para-text about-me'>
                                        Me at my Graduation Day, 2019.
                                    </p> : null
                            }
                        </div>
                    </Fade>

                </div>
            </div>
        </div>
    )
}

{/* <p className='heading2'>About Me</p>
                <p className='heading3'>About Me</p>
                <p className='sub-text'>About Me</p>
                <p className='image-text'>About Me</p>
                <p className='para-text'>About Me</p> */}

export default About;