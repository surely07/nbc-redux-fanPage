import React, { useState, useContext } from "react";
import { Btn, BtnArea } from "assets/Theme";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { CommonContext, DetailContext } from "context/CommonContext";

function DetailBtn() {
  const { setCommentsList } = useContext(CommonContext);
  const { comment, editedContent, setEditedContent } =
    useContext(DetailContext);

  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleDelete = () => {
    setCommentsList((prevComments) =>
      prevComments.filter((item) => item.id !== comment.id)
    );
    alert("정말 삭제하시겠습니까?");
    navigate("/");
  };

  const handleSaveEdit = () => {
    if (editedContent === comment.content) {
      alert("아무런 수정사항이 없습니다.");
      setIsEditing(false);
    } else {
      setCommentsList((prevComments) =>
        prevComments.map((item) =>
          item.id === comment.id ? { ...item, content: editedContent } : item
        )
      );
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedContent(comment.content);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <Comment>
            <Textarea
              value={editedContent}
              onChange={(e) => setEditedContent(e.target.value)}
            ></Textarea>
          </Comment>

          <BtnArea>
            <Btn onClick={handleSaveEdit}>저장</Btn>
            <Btn onClick={handleCancelEdit}>취소</Btn>
          </BtnArea>
        </>
      ) : (
        <>
          <Comment>{comment.content}</Comment>
          <BtnArea>
            <Btn onClick={handleEdit}>수정</Btn>
            <Btn onClick={handleDelete}>삭제</Btn>
          </BtnArea>
        </>
      )}
    </div>
  );
}

export default DetailBtn;

const Comment = styled.div`
  color: #0b0e1e;
  line-height: 1.5;
  width: 650px;
  height: 230px;
  background-color: #e4e2e2;
  padding: 30px;
  border-radius: 10px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 20px;
  border: none;
  resize: none;
  line-height: 1.5;
`;
