import styled from "styled-components";

export const TermsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  p {
    font-size: 1.2rem;
    line-height: 1.5;
    margin-bottom: 1rem;
    width: 100%;
    text-align: left;
  }
  h2 {
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: left;
    width: 100%;
    margin-top: 1rem;
  }
  ol {
    padding: 10px;
    color: red;
    margin: 0;
    width: 100%;
    text-align: left;
    li {
      font-size: 1.2rem;
      line-height: 1.5;
      margin-bottom: 1rem;
      width: 100%;
      text-align: left;
    }
  }
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: left;
    width: 100%;
  }
`;
