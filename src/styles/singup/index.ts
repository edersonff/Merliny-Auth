import styled from "styled-components";

export const SignupContainer = styled.div`
  @media screen and (max-width: 950px) {
    .hideMin {
      display: none;
    }
    .minColumn {
      flex-direction: column;
      .nextui-grid-item {
        width: 100%;
      }
    }
  }
`;
