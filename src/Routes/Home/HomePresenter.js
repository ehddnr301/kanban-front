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

const HomePresenter = ({ loading }) =>
  loading ? null : (
    <Container>
      <NavWrapper>
        <NavTitle>Kanban Board</NavTitle>
      </NavWrapper>
      <ContentContainer>
        <Column title={"TODO"}>
          <Card />
        </Column>
        <Column title={"ON GOING"}>
          <Card />
        </Column>
        <Column title={"TEST"}>
          <Card />
        </Column>
        <Column title={"DONE"}>
          <Card />
        </Column>
      </ContentContainer>
    </Container>
  );

HomePresenter.propTypes = {
  loading: propTypes.bool.isRequired
};

export default HomePresenter;
