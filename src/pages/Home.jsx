import React from "react";
import { MainDisplay, MainContainer } from "assets/Theme";
import MemberInfo from "components/MemberInfo";
import InputBox from "components/InputBox";
import CommentsList from "components/CommentsList";
import Button from "components/Button";

function Home({
  selectedMemberName,
  setSelectedMemberName,
  commentsList,
  setCommentsList,
}) {
  return (
    <MainDisplay>
      <Button setSelectedMemberName={setSelectedMemberName} />
      <MainContainer>
        <MemberInfo selectedMemberName={selectedMemberName} />
      </MainContainer>
      <InputBox
        selectedMemberName={selectedMemberName}
        setSelectedMemberName={setSelectedMemberName}
        commentsList={commentsList}
        setCommentsList={setCommentsList}
      />
      <CommentsList
        selectedMemberName={selectedMemberName}
        commentsList={commentsList}
        setCommentsList={setCommentsList}
      />
    </MainDisplay>
  );
}

export default Home;
