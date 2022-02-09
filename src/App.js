import React, { useEffect, useState } from 'react';
import './App.scss';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Main from './pages/Main/Main';
import { ReactComponent as LinkedIn } from '../src/assets/linkedin.svg';
import { ReactComponent as GitHub } from '../src/assets/github.svg';
import { ReactComponent as Email } from "../src/assets/email.svg";
import { ReactComponent as Resume } from "../src/assets/resume.svg";
import Contact from "./pages/Contact/Contact"
import CV from "./assets/VamsiKrishnaPalaparti_CV.pdf";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Header from './pages/Header/Header';
import Skills from './pages/Skills/Skills';
import { AppDiv } from './AppStyles';

const App = (props) => {

  const [color,setColor]=useState("#800020");

  const colors = {
    "Passionate": "#800020", "Optimistic": "#Ff4500", "Warmth": "#808000", "Natural": "#355e3b",
    "Versatile": "#002147", "Confident": "#4b0082", "Wholesome": "#A0522d", "Mature": "#36454f"
  }

  const [iconsVisibility, setIconsVisiblity] = useState(false);
  const [iconsVisibility1, setIconsVisiblity1] = useState(false);

  const [headerVisibility, setHeaderVisibility] = useState(false);

  const [scrollToValue, setScrollToValue] = useState('');

  const main_ref = React.createRef(null);
  const experience_ref = React.createRef(null);
  const project_ref = React.createRef(null);
  const about_ref = React.createRef(null);
  const education_ref = React.createRef(null);
  const contact_ref = React.createRef(null);
  const skills_ref = React.createRef(null);

  const handleVisibilityChange = (bool) => {
    setIconsVisiblity(bool);
  }

  const handleVisibilityChange1 = (bool) => {
    setIconsVisiblity1(bool);
  }

  const handleVisibilityChangeMain = (bool) => {
    setHeaderVisibility(bool);
  }

  const handleScrollToChange = (value) => {
    setScrollToValue(value);
  }

  const scrollTo = (ref) => {
    if (ref && ref.current /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
    setScrollToValue('');
  }

  useEffect(() => {
    if (scrollToValue === "") {
      return
    }
    else if (scrollToValue === "Experience") {
      scrollTo(experience_ref)
    }
    else if (scrollToValue === "Projects") {
      scrollTo(project_ref)
    }
    else if (scrollToValue === "About Me") {
      scrollTo(about_ref)
    }
    else if (scrollToValue === "Education") {
      scrollTo(education_ref)
    }
    else if (scrollToValue === "Contact") {
      scrollTo(contact_ref)
    }
    else if (scrollToValue === "Skills") {
      scrollTo(skills_ref)
    }
    else if (scrollToValue === "Main") {
      scrollTo(main_ref)
    }
  }, [scrollToValue, about_ref, education_ref, experience_ref, project_ref, main_ref, contact_ref, skills_ref])


  return (
    <AppDiv color={color}>
      <div className="App">
        <div className={!(iconsVisibility || iconsVisibility1) ? `logos-app animate__animated animate__fadeInBottomRight` : `logos-app animate__animated animate__fadeOutBottomRight`}>
          <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>LinkedIn</Tooltip>}>
            <a href="https://www.linkedin.com/in/vamsi-krishna-palaparti" target="_blank" rel="noreferrer"><LinkedIn fill={color} className="logo-app email" /></a>
          </OverlayTrigger>
          <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>GitHub</Tooltip>}>
            <a href="https://github.com/VamsiKrishna26" target="_blank" rel="noreferrer"><GitHub fill={color} className="logo-app email" /></a>
          </OverlayTrigger>
          <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Email Me</Tooltip>}>
            <a href="mailto:vamsi26081997@gmail.com" target="_blank" rel="noreferrer"><Email fill={color} className="logo-app email" /></a>
          </OverlayTrigger>
          <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Download my Resume</Tooltip>}>
            <a href={CV} download="Vamsi Krishna CV.pdf" target="_blank" rel="noreferrer"><Resume fill={color} className="logo-app email" /></a>
          </OverlayTrigger>
        </div>
        <div className='sections'>
          <Header {...props} headerVisibility={headerVisibility} onScrollToChange={handleScrollToChange} color={color} />
          <div ref={main_ref}>
            <Main {...props} onVisibilityChange={handleVisibilityChange} onVisibilityChangeMain={handleVisibilityChangeMain} color={color} />
          </div>
          <div ref={experience_ref}>
            <Experience {...props} color={color} />
          </div>
          <div ref={project_ref}>
            <Projects {...props} color={color} />
          </div>
          <div ref={skills_ref}>
            <Skills {...props} color={color} />
          </div>
          <div ref={about_ref}>
            <About {...props} color={color} />
          </div>
          <div ref={education_ref}>
            <Education {...props} color={color} />
          </div>
          <div ref={contact_ref}>
            <Contact {...props} color={color} onVisibilityChange1={handleVisibilityChange1} />
          </div>

          <div className='easter-egg'>
            <p className='para-text'>Want to feel </p>
            <div className='para-text colors'>
              {
                Object.keys(colors).map((each_color, index) =>
                  <span onClick={()=>setColor(colors[each_color])} style={{ color: colors[each_color] }} key={index}>{each_color} </span>
                )
              }
            </div>
            <p className='para-text'> today?</p>
          </div>
        </div>
      </div>
    </AppDiv>
  );
}

export default App;
