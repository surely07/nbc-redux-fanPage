import React from "react";
import { MainDisplay, MainContainer } from "assets/Theme";
import MemberInfo from "components/MemberInfo";
import InputBox from "components/InputBox";
import Button from "components/Button";
import LettersList from "components/LetterList";

function Home({ selectedMemberName, setSelectedMemberName }) {
  return (
    <MainDisplay>
      <Button setSelectedMemberName={setSelectedMemberName} />
      <MainContainer>
        <MemberInfo selectedMemberName={selectedMemberName} />
      </MainContainer>
      <InputBox
        selectedMemberName={selectedMemberName}
        setSelectedMemberName={setSelectedMemberName}
      />
      <LettersList selectedMemberName={selectedMemberName} />
    </MainDisplay>
  );
}

export default Home;
