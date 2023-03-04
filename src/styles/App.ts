import styled from "styled-components";

export const AppCookieContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 120px;
  background-color: #2b373b;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  animation: slideIn 0.5s ease-in-out;
  @keyframes slideIn {
    0% {
      transform: translateY(50%);
      opacity: 0.5;
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
`;
