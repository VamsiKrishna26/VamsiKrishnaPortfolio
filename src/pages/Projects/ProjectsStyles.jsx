import styled from "styled-components";

export const ProjectsDiv = styled.div`
.projects{
    margin-top: -1px !important;
    
    .projects-page {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        padding-left: 3%;
        padding-right: 3%;
        .sub-text{
            color: ${props=>props.color};
            text-align: center;
        }
    
        .container {
            position: relative;
            overflow: hidden;
            -webkit-perspective: 50em;
            perspective: 50em;
            -webkit-box-sizing: padding-box;
            box-sizing: padding-box;
            -webkit-transition: all 0.2s ease-out;
            transition: all 0.2s ease-out;
            cursor: pointer;
            margin: 2em;
            width: 85%;
            //border: 1px solid red;
            background-color: ${props=>props.color};
            border-radius: 10px;
    
            .project {
                width: 100%;
                border-radius: 20px;
                //border: 1px solid green;
            }
    
            .fig-caption {
                top: 50%;
                left: 20px;
                right: 20px;
                position: absolute;
                opacity: 0;
                z-index: 1;
                padding: 2em;
                //border: 1px solid black;
            }
        }
    
        .container::after {
            background-color: #ffffff;
            position: absolute;
            content: "";
            display: block;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
            -webkit-transform: rotateX(-90deg);
            transform: rotateX(-90deg);
            -webkit-transform-origin: 50% 50%;
            -ms-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
            opacity: 0;
        }
    
        .container:hover {
            .fig-caption {
                -webkit-transform: translateY(-50%);
                transform: translateY(-50%);
                opacity: 1;
                -webkit-transition-delay: 0.2s;
                transition-delay: 0.2s;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
    
                .sub-text{
                    align-self: center;
                }
    
                .para-text{
                    font-size: 18px !important;
    
                    .code-logo{
                        color: ${props=>props.color};
                        width: 18px;
                        height: 18px;
                    }
                }
    
                .button-bs{
                    align-self: center;
                    text-decoration: none;
                    .button{
                        color: ${props=>props.color};
                        border-color: ${props=>props.color};
                    }
                }
            }
        }
    
        .container:hover::after {
            -webkit-transform: rotateX(0);
            transform: rotateX(0);
            opacity: 0.95;
            border-radius: 20px;
            background-color: white;
        }
    }
    
    @media screen and (max-width: 920px) {
        .projects-page{
            .sub-text{
                font-size: 20px !important;
            }
    
            .container{
                margin: 1em !important;
                width: 100% !important;
            }
        }
    }
    
}
`;