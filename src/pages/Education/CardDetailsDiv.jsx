import styled from "styled-components";

export const CardDetailsDiv=styled.div`
    .card-details {
        .card-class {
            box-shadow: 0 0 4em 0px rgba(0, 0, 0, 0.3);

            .timeline-content {
                display: flex;
                justify-content: center;
                align-items: flex-start;
                flex-direction: column;

                .plus-icon {
                    align-self: center;
                    cursor: pointer;
                    height: 20px;
                    width: 20px;
                }

                .plus-icon-down {
                    animation-name: rotateIcon;
                    animation-duration: 1s;
                    animation-fill-mode: forwards;
                }

                .plus-icon-up {
                    animation-name: rotateIcon;
                    animation-duration: 1s;
                    animation-fill-mode: forwards;
                }

                @keyframes rotateIcon {
                    to {
                        transform: rotate(180deg);
                    }
                }

                .heading2 {
                    font-size: 28px;
                }

                .heading3 {
                    font-size: 30px;
                }

                .sub-text {
                    font-size: 18px;
                }

                .para-text {
                    font-size: 16px;
                }
            }
        }

        .card-class:hover {
            animation-name: hoverEffect;
            animation-duration: 0.6s;
            animation-fill-mode: forwards;
        }

        @keyframes hoverEffect {
            to {
                box-shadow: 0 0 4em 0px rgba(0, 0, 0, 0.6);
                transform: scale(1.03);
            }
        }
    }

    @media screen and (max-width: 920px) {
        .card-class {
            box-shadow: 0 0 1em 0px rgba(0, 0, 0, 0.3);

            .timeline-content {
                .heading2 {
                    font-size: 20px !important;
                }

                .sub-text {
                    font-size: 16px !important;
                }

                .para-text {
                    font-size: 14px !important;
                }
            }
        }
    }

`;