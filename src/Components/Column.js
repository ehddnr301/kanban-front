import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useInput from "../hooks/useInput";
import Input from "./Input";
import { kanbanApi } from "../api";

const Container = styled.div`
  margin: 50px;
  border: 1px solid red;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Button = styled.div`
  cursor: pointer;
`;

const Title = styled.div``;

const Content = styled.div`
  width: 100%;
  border: 1px solid blue;
`;

const InputContainer = styled.div``;

const InputS = styled(Input)`
  display: ${props => (props.category === props.isInput ? "block" : "none")};
`;

const Column = ({ title, children, category }) => {
  const [isInput, setIsInput] = useState("none");
  const create = useInput("");
  const onSubmit = async event => {
    event.preventDefault();
    let body = { title: create.value, category };
    await kanbanApi.postCard(body);
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
        <Button onClick={onClick}>✚</Button>
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
      <Content>{children}</Content>
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
