import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import Input from "./Input";
import { kanbanApi } from "../api";
import { Plus } from "./Icons";

const Container = styled.div`
  margin: 50px;
  max-width: 235px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.div`
  cursor: pointer;
  color: white;
  margin-left: 40px;
`;

const Title = styled.div`
  color: white;
  font-family: "Liu Jian Mao Cao", cursive;
  margin-left: 50px;
  font-size: 24px;
`;

const Content = styled.div`
  width: 100%;
`;

const InputContainer = styled.div``;

const InputS = styled(Input)`
  display: ${props => (props.category === props.isInput ? "block" : "none")};
`;

const Column = ({ title, children, category, setItems, items }) => {
  const [isInput, setIsInput] = useState("none");
  const [loading, setLoading] = useState(false);
  const create = useInput("");
  const onSubmit = async event => {
    event.preventDefault();
    let body = { title: create.value, category };
    const newCard = await kanbanApi.postCard(body);
    const {
      data: { id }
    } = newCard;
    const newObj = { id, title: create.value, category };
    setItems([...items, newObj]);
    setIsInput("none");
    create.value = "";
  };
  const onClick = () => {
    setIsInput(category);
  };

  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        <Button onClick={onClick}>
          <Plus />
        </Button>
      </Header>
      <InputContainer isInput={isInput}>
        <form method="post" onSubmit={onSubmit}>
          <InputS
            category={category}
            isInput={isInput}
            placeholder={"Write new one"}
            {...create}
          ></InputS>
        </form>
      </InputContainer>
      <Content id={category}>{children}</Content>
    </Container>
  );
};

Column.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Column;
