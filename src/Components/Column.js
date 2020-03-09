import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

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

const Button = styled.div``;

const Title = styled.div``;

const Content = styled.div`
  width: 100%;
  border: 1px solid blue;
`;

const Column = ({ title, children }) => (
  <Container>
    <Header>
      <Title>{title}</Title>
      <Button>✚</Button>
    </Header>
    <Content>{children}</Content>
  </Container>
);

Column.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Column;
