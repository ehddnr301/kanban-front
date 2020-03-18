import React from "react";
import styled from "styled-components";
import Column from "../../Components/Column";
import propTypes from "prop-types";
import Card from "../../Components/Card";

const Container = styled.div`
  margin: 50px;
  color: white;
`;

const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
`;

const NavTitle = styled.div`
  font-size: 36px;
  font-weight: 600;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  color: black;
  width: 100%;
`;

const HomePresenter = ({ loading, items, setItems }) => {
  return loading ? null : (
    <Container>
      <NavWrapper>
        <NavTitle>Kanban Board</NavTitle>
      </NavWrapper>
      <ContentContainer>
        <Column title="TODO" category="todo" setItems={setItems} items={items}>
          {items &&
            items
              .filter(item => item.category === "todo")
              .map(item => (
                <Card
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  category={item.category}
                  setItems={setItems}
                  items={items}
                ></Card>
              ))}
        </Column>
        <Column
          title="ONGOING"
          category="ongoing"
          setItems={setItems}
          items={items}
        >
          {items &&
            items
              .filter(item => item.category === "ongoing")
              .map(item => (
                <Card
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  category={item.category}
                  setItems={setItems}
                  items={items}
                ></Card>
              ))}
        </Column>
        <Column title="TEST" category="test" setItems={setItems} items={items}>
          {items &&
            items
              .filter(item => item.category === "test")
              .map(item => (
                <Card
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  category={item.category}
                  setItems={setItems}
                  items={items}
                ></Card>
              ))}
        </Column>
        <Column title="DONE" category="done" setItems={setItems} items={items}>
          {items &&
            items
              .filter(item => item.category === "done")
              .map(item => (
                <Card
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  category={item.category}
                  setItems={setItems}
                  items={items}
                ></Card>
              ))}
        </Column>
      </ContentContainer>
    </Container>
  );
};

HomePresenter.propTypes = {
  loading: propTypes.bool.isRequired
};

export default HomePresenter;
