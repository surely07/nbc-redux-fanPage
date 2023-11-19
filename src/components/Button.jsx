import React from "react";
import { members } from "shared/members";
import styled from "styled-components";

function Button({ setSelectedMemberName }) {
  const memberClickHandler = (name) => {
    setSelectedMemberName(name);
  };

  return (
    <>
      <PlayerBox>
        {members.map((item) => {
          return (
            <div key={item.id}>
              <PlayerBtn
                onClick={() => {
                  setSelectedMemberName(item.name);
                  memberClickHandler(item.name);
                }}
              >
                {item.name}
              </PlayerBtn>
            </div>
          );
        })}
      </PlayerBox>
    </>
  );
}

export default Button;

const PlayerBox = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;

const PlayerBtn = styled.button`
  width: 150px;
  border: #9de757 solid 1px;
  color: #9de757;
  background-color: transparent;
  padding: 10px;
  transition: 0.5s;
  overflow: hidden;

  &:hover {
    background-color: #9de757;
    color: #0b0e1e;
  }

  &:focus {
    background-color: #9de757;
    color: #0b0e1e;
  }
`;
