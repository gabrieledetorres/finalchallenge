import styled from "styled-components";

export const BoxFig = styled.figure`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  overflow: hidden;

  div {
    margin-top: 5px;
  }
`;

export const PrintImage = styled.img`
  width: 350px;
  height: 200px;
  padding: 5px;
  transition: 1s all;
  :hover {
    transform: scale(1.2);
    opacity: 0.4;
  }
`;
