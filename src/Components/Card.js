import React, { useState } from "react";
import styled from "styled-components";
import { kanbanApi } from "../api";

const Container = styled.div`
  margin: 10px;
  width: 90%;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 100%;
`;

const DeleteBtn = styled.div`
  cursor: pointer;
`;

const Card = ({ id, title, category }) => {
  const [cate, setCate] = useState(category);
  const onClick = async event => {
    event.preventDefault();
    await kanbanApi.deleteCard(id);
  };
  return (
    <Container>
      <Content id={id} category={category}>
        {title}
      </Content>
      <DeleteBtn onClick={onClick}>❌</DeleteBtn>
    </Container>
  );
};

export default Card;
