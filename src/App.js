import React, { useEffect, useState } from 'react';
import './App.scss';
import About from './pages/About/About';
import Education from './pages/Education/Education';
import Main from './pages/Main/Main';
import LinkedIn from '../src/assets/linkedin.svg';
import GitHub from '../src/assets/github.svg';
import Email from "../src/assets/email.svg";
import Resume from "../src/assets/resume.svg";
import Contact from "./pages/Contact/Contact"
import CV from "./assets/VamsiKrishnaPalaparti_CV.pdf";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Header from './pages/Header/Header';
import Skills from './pages/Skills/Skills';

const App = (props) => {

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
    console.log(value);
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
    else if(scrollToValue==="Main"){
      scrollTo(main_ref)
    }
  }, [scrollToValue, about_ref, education_ref, experience_ref, project_ref, main_ref, contact_ref, skills_ref])


  return (
    <div className="App">
      <div className={!(iconsVisibility || iconsVisibility1) ? `logos-app animate__animated animate__fadeInBottomRight` : `logos-app animate__animated animate__fadeOutBottomRight`}>
        <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>LinkedIn</Tooltip>}>
          <a href="https://www.linkedin.com/in/vamsi-krishna-palaparti" target="_blank" rel="noreferrer"><img className="logo-app" src={LinkedIn} alt="No Alt" /></a>
        </OverlayTrigger>
        <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>GitHub</Tooltip>}>
          <a href="https://github.com/VamsiKrishna26" target="_blank" rel="noreferrer"><img className='logo-app' src={GitHub} alt="No alt" /></a>
        </OverlayTrigger>
        <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Email Me</Tooltip>}>
          <a href="mailto:vamsi26081997@gmail.com" target="_blank" rel="noreferrer"><img className="logo-app email" src={Email} alt="No Alt" /></a>
        </OverlayTrigger>
        <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={<Tooltip>Download my Resume</Tooltip>}>
          <a href={CV} download="Vamsi Krishna CV.pdf" target="_blank" rel="noreferrer"><img className="logo-app email" src={Resume} alt="No Alt" /></a>
        </OverlayTrigger>
      </div>
      <div className='sections'>
        <Header {...props} headerVisibility={headerVisibility} onScrollToChange={handleScrollToChange} />
        <div ref={main_ref}>
          <Main {...props} onVisibilityChange={handleVisibilityChange} onVisibilityChangeMain={handleVisibilityChangeMain} />
        </div>
        <div ref={experience_ref}>
          <Experience />
        </div>
        <div ref={project_ref}>
          <Projects />
        </div>
        <div ref={skills_ref}>
          <Skills />
        </div>
        <div ref={about_ref}>
          <About />
        </div>
        <div ref={education_ref}>
          <Education />
        </div>
        <div ref={contact_ref}>
          <Contact {...props} onVisibilityChange1={handleVisibilityChange1} />
        </div>
      </div>
    </div>
  );
}

export default App;
