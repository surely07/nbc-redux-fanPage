import React from "react";
import { MainDisplay, MainContainer } from "assets/Theme";
import MemberInfo from "components/MemberInfo";
import InputBox from "components/InputBox";
import LetterList from "components/LetterList";
import Button from "components/Button";

function Home() {
  return (
    <MainDisplay>
      <Button />
      <MainContainer>
        <MemberInfo />
      </MainContainer>
      <InputBox />
      <LetterList />
    </MainDisplay>
  );
}

export default Home;
