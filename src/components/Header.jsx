import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderBox>
      <HeaderFont href="/">Tottenham Hotspur</HeaderFont>
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

const HeaderFont = styled.a`
  color: white;
  font-size: 40px;
  padding: 20px;
`;
