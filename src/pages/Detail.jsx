import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CommentInfoBox, CommentFont } from "style/Theme";
import { LetterContext } from "context/LetterContext";
import DetailBtn from "components/DetailBtn";

function Detail() {
  const { letters } = useContext(LetterContext);

  const { id } = useParams();
  const [comment, setComment] = useState(null);
  const [editedContent, setEditedContent] = useState("");

  useEffect(() => {
    console.log(letters);
    const selectedComment = letters.find((comment) => comment.id === id);
    setComment(selectedComment);
    setEditedContent(selectedComment?.content || "");
  }, [letters, id]);

  return (
    <div>
      {comment && (
        <CommentDetailBox>
          <CommentInfoBox>
            <figure>
              <Avatar src={comment.avatar} alt={comment.nickname}></Avatar>
            </figure>
            <CommentInfo>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  lineHeight: "1.3",
                }}
              >
                <h3>To.{comment.writedTo}</h3>
                <CommentFont fontSize="20px" fontWeight="500">
                  {comment.nickname}
                </CommentFont>
                <CommentFont fontSize="13px" fontWeight="200">
                  {comment.createdAt}
                </CommentFont>
              </div>
            </CommentInfo>
          </CommentInfoBox>
          <DetailBtn
            comment={comment}
            editedContent={editedContent}
            setEditedContent={setEditedContent}
            id={id}
          />
        </CommentDetailBox>
      )}
    </div>
  );
}

export default Detail;

const CommentDetailBox = styled.div`
  border: 2px solid #9de757;
  color: white;
  width: 700px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 50px auto;
  gap: 30px;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const CommentInfo = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
