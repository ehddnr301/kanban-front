import React, { useState, useCallback, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const DeleteBtn = styled.div``;

const POSITION = { x: 0, y: 0 };

const Card = ({ id, title, category }) => {
  const [cate, setCate] = useState(category);
  const onMouseDown = event => {
    const currentCategory = event.target.parentNode.parentNode.id;
    setCate("none");

    const handleDelete = e => {};
  };
  return (
    <Container>
      <Content id={id} category={category} onMouseDown={onMouseDown}>
        {title}
      </Content>
      <DeleteBtn onClick={}>❌</DeleteBtn>
    </Container>
  );
};

export default Card;
