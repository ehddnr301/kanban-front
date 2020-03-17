import React from "react";
import styled from "styled-components";
import Column from "../../Components/Column";
import propTypes from "prop-types";
import Card from "../../Components/Card";

const Container = styled.div`
  margin: 50px;
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NavTitle = styled.div`
  font-size: 24px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const HomePresenter = ({ loading, items }) => {
  return loading ? null : (
    <Container>
      <NavWrapper>
        <NavTitle>Kanban Board</NavTitle>
      </NavWrapper>
      <ContentContainer>
        {items && (
          <Column title={"TODO"} category={"todo"}>
            {items.map(item =>
              item.category === "todo" ? (
                <Card id={item.id} title={item.title} category={"todo"}></Card>
              ) : null
            )}
          </Column>
        )}
        {items && (
          <Column title={"ONGOING"} category={"ongoing"}>
            {items.map(item =>
              item.category === "ongoing" ? (
                <Card
                  id={item.id}
                  title={item.title}
                  category={"ongoing"}
                ></Card>
              ) : null
            )}
          </Column>
        )}
        {items && (
          <Column title={"TEST"} category={"test"}>
            {items.map(item =>
              item.category === "test" ? (
                <Card id={item.id} title={item.title} category={"test"}></Card>
              ) : null
            )}
          </Column>
        )}
        {items && (
          <Column title={"DONE"} category={"done"}>
            {items.map(item =>
              item.category === "done" ? (
                <Card id={item.id} title={item.title} category={"done"}></Card>
              ) : null
            )}
          </Column>
        )}
      </ContentContainer>
    </Container>
  );
};

HomePresenter.propTypes = {
  loading: propTypes.bool.isRequired
};

export default HomePresenter;
