import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  padding: 2em;
`;

export const Li = styled.li`
  padding: 1em;
`;

export const Div = styled.div`
  font-family: "Bebas Neue", cursive;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #fdfcdc;
`;

export const UL = styled.ul`
  font-family: "Bebas Neue", cursive;
  font-size: 20px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const LinkNav = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: underline;
  }
`;
