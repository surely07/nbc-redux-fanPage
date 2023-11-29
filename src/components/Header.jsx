import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderBox>
      <StLink to="/">
        <HeaderFont>Tottenham Hotspur Fan Page</HeaderFont>
      </StLink>
    </HeaderBox>
  );
}

export default Header;

const HeaderBox = styled.div`
  width: 100%;
  height: 300px;
  background-color: #9de757;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HeaderFont = styled.h1`
  color: white;
  font-size: 40px;
  padding: 20px;
`;

const StLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
