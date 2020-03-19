import React from "react";
import styled from "styled-components";
import { kanbanApi } from "../api";
import { DeleteX, Pin } from "./Icons";

const Container = styled.div`
  position: relative;
  margin: 10px;
  max-width: 235px;
  width: 90%;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebd862;
  border-radius: 10px;
`;

const Content = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 24px;
`;

const DeleteBtn = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  cursor: pointer;
  margin-right: 10px;
`;

const Select = styled.select`
  position: absolute;
  right: 5px;
  bottom: 5px;
  background-color: white;
  color: black;
  font-family: Arial;
`;

const Card = ({ id, title, category, items, setItems }) => {
  const onClick = async event => {
    event.preventDefault();
    await kanbanApi.deleteCard(id);
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
  };

  const changeCategory = async event => {
    const newCategory = event.target.value;
    const req = { id, title, category: newCategory };
    await kanbanApi.putCard(req);
    try {
      const {
        data: { Items: it }
      } = await kanbanApi.getCards();
      setItems(it);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <DeleteBtn onClick={onClick}>
        <Pin />
      </DeleteBtn>
      <Content id={id} category={category}>
        <div>{title}</div>
      </Content>
      <Select onChange={changeCategory}>
        <option value="">Category</option>
        <option value={"todo"} disabled={category === "todo" ? true : false}>
          Todo
        </option>
        <option
          value={"ongoing"}
          disabled={category === "ongoing" ? true : false}
        >
          Ongoing
        </option>
        <option value={"test"} disabled={category === "test" ? true : false}>
          Test
        </option>
        <option value={"done"} disabled={category === "done" ? true : false}>
          Done
        </option>
      </Select>
    </Container>
  );
};

export default Card;
