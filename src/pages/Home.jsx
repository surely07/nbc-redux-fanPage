import React from "react";
import { MainDisplay, MainContainer } from "assets/Theme";
import MemberInfo from "components/MemberInfo";
import InputBox from "components/InputBox";
import CommentsList from "components/CommentsList";
import Button from "components/Button";

function Home() {
  return (
    <MainDisplay>
      <Button />
      <MainContainer>
        <MemberInfo />
      </MainContainer>
      <InputBox />
      <CommentsList />
    </MainDisplay>
  );
}

export default Home;
