import styled from 'styled-components';

export const AboutDiv=styled.div`
    background-color: ${props=>props.color};
    padding: 3em;
    margin-top: -2px !important;

    .about-page-body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin-left: 2em;
        margin-right: 2em;

        .heading1{
            color: white !important;
        }

        .text-photo {
            display: flex;
            align-items:center;
            justify-content: space-between;

            .about-me {
                //flex: 3;
                //border: 1px solid red;
                text-align: justify;
                text-justify: inter-word;
                margin-right: 1em;
                color: white;
            }

            .div-graduation-image {
                //flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                min-width: 20%;

                .graduation-image {
                    border-radius: 8px;
                    max-width: 100%;
                    margin-bottom: 2em;
                    //border: 1px solid blue;
                }
            }
        }
    }
    }

    @media screen and (max-width: 920px) {
        padding: 0em !important;
        
        .about-page-body {
            margin-left: 1em;
            margin-right: 1em;
        }

        .text-photo {
            flex-direction: column !important;
            
            .about-me {
                margin-right: 0em !important;
            }

            .div-graduation-image {
                .graduation-image {
                    max-width: 80% !important;
                }
            }
        }
`;