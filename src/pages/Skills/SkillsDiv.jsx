import styled from "styled-components";

export const SkillsDiv=styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -1px !important;
    padding-bottom: 2em;
    flex-wrap: wrap;

    .heading2{
        color: white !important;
        background-color: ${props=>props.color};
        text-align: center;
        font-size: 26px;
        padding: 3em 1em 1em 1em;
    }

    .skill-type{
        display: flex;
        flex-direction: column;
        margin: 1em;
        min-height: 500px;
        min-width:270px;
        padding: 1.5em;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-radius: 20px;

        

        .heading3{
            color: ${props=>props.color};
        }

        .skill-icon-fade{
            align-self: center;

            .skill-icon{
                color: ${props=>props.color};
                height: 50px;
                width: 50px;
                //border: 1px solid red;
                margin-bottom: 1em;
            }
        }

        .tick{
            color: ${props=>props.color};
            height: 16px;
            width: 16px;
        }
    }
    }

    @media screen and (max-width: 920px) {
    .heading2{
        font-size: 20px !important;
    }

    .skill-type{

        min-height: 300px !important;
        min-width: 250px !important;

        .heading3{
            font-size: 28px !important;
        }

        .para-text{
            font-size: 15px !important;
        }
    }
`;