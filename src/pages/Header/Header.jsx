import React, { useState, useEffect } from "react";
import "./Header.scss";
import Menu from "../../assets/menu.png";
import Close from "../../assets/close.png";
// import AnimateHeight from 'react-animate-height';

const Header = (props) => {
    const { headerVisibility } = props;

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {

        const updateWidthDimensions = () => {
            const newWidth = window.innerWidth;
            setInnerWidth(newWidth);
        }
        window.addEventListener("resize", updateWidthDimensions);
        return () => window.removeEventListener("resize", updateWidthDimensions)
    }, [])

    
        

    return (
        <div className={`header ${!headerVisibility ? `animate__animated animate__fadeInDown` : `animate__animated animate__fadeOutUp`}`}>
            <p onClick={()=>props.onScrollToChange('Main')} className="my-name">Vamsi Krishna</p>
            {innerWidth > 920 ?
                <div className="options">
                    <p onClick={()=>props.onScrollToChange('Experience')} className="option">Experience</p>
                    <p onClick={()=>props.onScrollToChange('Projects')} className="option">Projects</p>
                    <p onClick={()=>props.onScrollToChange('Skills')} className="option">Skills</p>
                    <p onClick={()=>props.onScrollToChange('About Me')} className="option">About Me</p>
                    <p onClick={()=>props.onScrollToChange('Education')} className="option">Education</p>
                    <p onClick={()=>props.onScrollToChange('Contact')} className="option">Contact</p>
                </div> :
                <div className="show-menu">
                    {!showMenu ? <img src={Menu} className="menu-logo" alt="No alt" onClick={() => setShowMenu(!showMenu)} /> : null}
                    {
                        showMenu ?
                            <div className="menu">
                                <img src={Close} className="close-logo" alt="No alt" onClick={() => setShowMenu(!showMenu)} />
                                <p onClick={()=>props.onScrollToChange('Experience')} className="option">Experience</p>
                                <p onClick={()=>props.onScrollToChange('Projects')} className="option">Projects</p>
                                <p onClick={()=>props.onScrollToChange('Skills')} className="option">Skills</p>
                                <p onClick={()=>props.onScrollToChange('About Me')} className="option">About Me</p>
                                <p onClick={()=>props.onScrollToChange('Education')} className="option">Education</p>
                                <p onClick={()=>props.onScrollToChange('Contact')} className="option">Contact</p>
                            </div> : null
                    }
                </div>
            }
        </div>
    )
}

export default Header;