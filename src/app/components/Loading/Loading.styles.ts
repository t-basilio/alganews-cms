import styled from "styled-components";

export const LoadingWrapper = styled.div`
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(3px);

  display: flex;
  align-items: center;
  justify-content: center;

  animation: 0.3s pop ease;

  @keyframes pop {
    from {
      background-color: rgba(0, 0, 0, 0);
      opacity: 0;
    }
    to {
      background-color: rgba(0, 0, 0, 0.7);
      opacity: 1;
    }
  }

  .lds-ring,
  .lds-ring div {
    box-sizing: border-box;
  }
  .lds-ring {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 80px;
    height: 80px;
    margin: 8px;
    border: 8px solid #0bf;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #0bf transparent transparent transparent;
  }
  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }
  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }
  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }
  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;