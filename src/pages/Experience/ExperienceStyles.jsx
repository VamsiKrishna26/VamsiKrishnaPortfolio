import styled from "styled-components";

export const ExperienceDiv=styled.div`
.experience-page{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background-color: ${props=>props.color};
    padding: 5em 2em 2em 2em;
    margin-top: -1px !important;

    .sub-text{
        color: white !important;
        text-align: center;
    }

    .animate__zoomOut{
        display: none;
    }

}

@media screen and (max-width: 920px) {
    .experience-page{
        padding: 1em;

        .sub-text{
            font-size: 20px !important;
        }

        .card-details{
            margin-top: 1em !important;
            margin-bottom: 1em !important;
        }
    }
}
`;