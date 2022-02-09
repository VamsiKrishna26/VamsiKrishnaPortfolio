import styled from "styled-components";

export const EducationDiv=styled.div`
.education{
    margin-top: -1px !important;
    
    .education-page {
        box-sizing: border-box;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        
    
        .heading1{
            color: ${props=>props.color};
        }
    
        .timeline {
            width: 90%;
            height: auto;
            max-width: 1000px;
            margin: 0 auto;
            position: relative;
    
            ul {
                list-style: none;
    
                li {
                    border-radius: 10px;
                    margin-bottom: 40px;
    
                    .timeline-content {
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
    
    @media only screen and (min-width: 768px) {
        .timeline {
            margin: 0px !important;
            ul {
                li {
                    width: 50%;
                    position: relative;
    
                    .li-icon {
                        height: 30px;
                        width: 30px;
                        position: absolute;
                        z-index: 10;
                        color: white;
                        background-color: ${props=>props.color};
                        border-radius: 30px;
                    }
    
                    .li-date{
                        position: absolute;
                        z-index: 10;
                    }
                }
    
                li:nth-child(odd) {
                    float: left;
                    clear: right;
                    transform: translateX(-40px);
    
                    .li-icon {
                        transform: translate(50%, 0%);
                        right: -40px;
                    }
    
                    .li-date{
                        transform: translate(50%, 0%);
                        right: -300px;
                    }
                }
    
                li:nth-child(even) {
                    float: right;
                    clear: left;
                    transform: translateX(40px);
                    .li-icon {
                        transform: translate(-50%, -50%);
                        left: -40px;
                    }
                    .li-date{
                        transform: translate(-50%, -50%);
                        left: -300px;
                    }
                }
    
                li:hover {
                    .li-icon {
                        color: ${props=>props.color};
                        background-color: white;
                    }
                }
            }
        }
    
        .timeline::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 10px;
            background-color: ${props=>props.color};
            left: 51.5%;
            transform: translateX(-51.5%);
        }
    }
    
    @media only screen and (max-width: 767px) {
        .timeline {
            
            ul {
                li {
                    width: 100%;
                    position: relative;
                }
    
                .li-icon {
                    height: 30px;
                    width: 30px;
                    position: absolute;
                    z-index: 10;
                    color: white;
                    background-color: ${props=>props.color};
                    border-radius: 30px;
                    left: -45px;
                }
            }
        }
    
        .timeline::before {
            content: "";
            position: absolute;
            height: 100%;
            width: 5px;
            background-color: ${props=>props.color};
            left: 0%;
            transform: translateX(0%);
        }
    
        li:hover {
            .li-icon {
                color: ${props=>props.color};
                background-color: white;
            }
        }
    }
    
}
`;