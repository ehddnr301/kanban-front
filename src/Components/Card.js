import React from "react";
import styled from "styled-components";
import { kanbanApi } from "../api";
import { DeleteX } from "./Icons";

const Container = styled.div`
  margin: 10px;
  width: 90%;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
`;

const DeleteBtn = styled.div`
  cursor: pointer;
`;

const Select = styled.select`
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
    console.log("hi");
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
        <DeleteX />
      </DeleteBtn>
      <Content id={id} category={category}>
        {title}
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
