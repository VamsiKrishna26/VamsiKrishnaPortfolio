import styled from "styled-components";

export const MainDiv=styled.div`
.main-page {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 2%;
    padding-top: 2%;
  
    .text {
      display: flex;
      justify-content: center;
      // align-items: center;
      min-height: 40vh;
  
      .text-left {
        flex: 0.85;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin: 4em;
  
        .logos {
          display: flex;
  
          .logo {
            height: 40px;
            width: 40px;
            cursor: pointer;
            margin: 0.5em;
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
      }
  
      .animoji-right {
        flex: 0.15;
        display: flex;
        align-items: center;
  
        .image-right{
          background-color: ${props=>props.color};
          border-radius: 50%;
          margin: 3em;
          
  
          .animoji {
            flex: 1;
            height: auto;
            width: 270px;
            border-radius: 50%;
            
          }
        }
        //border: 1px solid red;
      }
    }
  }
  
  @media screen and (max-width: 920px) {
    .main-page{
      .text{
        flex-direction: column;
        min-height: 0vh !important;
  
        .text-left{
          margin: 1em;
  
          .sub-text{
            font-size: 20px !important;
          }
  
          .logos{
            .logo{
              height: 30px;
              width: 30px;
            }
          }
        }
  
        .animoji-right{
          justify-content: center;
  
          .image-right{
            .animoji{
              width: 180px;
            }
          }
        }
      }
    }
  }
  
`;