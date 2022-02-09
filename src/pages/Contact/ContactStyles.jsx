import styled from 'styled-components';

export const ContactDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -1px !important;
    background-color: ${props=>props.color};
    padding: 5em 2em 2em 2em;

    .heading2 {
        color: white !important;
    }

    .para-text {
        color: white !important;
        text-align: center;
    }

    .logos {
        display: flex;

        .logo {
            height: 40px;
            width: 40px;
            cursor: pointer;
            margin: 0.5em;
            filter: invert(1) sepia(0) saturate(0) hue-rotate(0deg) brightness(1) ;
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

    @media screen and (max-width: 920px) {
        .logo {
            width: 30px !important;
            height: 30px !important;
        }
    }
    `;