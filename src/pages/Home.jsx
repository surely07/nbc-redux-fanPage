import React from "react";
import { MainDisplay, MainContainer } from "assets/Theme";
import MemberInfo from "components/MemberInfo";
import InputBox from "components/InputBox";
import CommentsList from "components/CommentsList";
import Button from "components/Button";

function Home({
  commentsList,
  setCommentsList,
  selectedMemberName,
  setSelectedMemberName,
}) {
  return (
    <MainDisplay>
      <Button
        selectedMemberName={selectedMemberName}
        setSelectedMemberName={setSelectedMemberName}
      />
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
        commentsList={commentsList}
        setCommentsList={setCommentsList}
        selectedMemberName={selectedMemberName}
      />
    </MainDisplay>
  );
}

export default Home;
