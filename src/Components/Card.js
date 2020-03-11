import React, { useState, useCallback, useMemo, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  margin: 10px;
  width: 90%;
  border: 1px solid pink;
`;

const Content = styled.div``;

const POSITION = { x: 0, y: 0 };

const Card = ({ id, title }) => {
  //   const [state, setState] = useState({
  //     isDragging: false,
  //     origin: POSITION,
  //     translation: POSITION
  //   });

  //   const handleMouseDown = useCallback(({ clientX, clientY }) => {
  //     setState(state => ({
  //       ...state,
  //       isDragging: true,
  //       origin: { x: clientX, y: clientY }
  //     }));
  //   }, []);

  //   const handleMouseMove = useCallback(
  //     ({ clientX, clientY }) => {
  //       const translation = {
  //         x: clientX - state.origin.x,
  //         y: clientY - state.origin.y
  //       };

  //       setState(state => ({
  //         ...state,
  //         translation
  //       }));
  //     },
  //     [state.origin]
  //   );

  //   const handleMouseUp = useCallback(() => {
  //     setState(state => ({
  //       ...state,
  //       isDragging: false
  //     }));
  //   }, [state.origin]);

  //   useEffect(() => {
  //     if (state.isDragging) {
  //       window.addEventListener("mousemove", handleMouseMove);
  //       window.addEventListener("mouseup", handleMouseUp);
  //     } else {
  //       window.removeEventListener("mousemove", handleMouseMove);
  //       window.removeEventListener("mouseup", handleMouseUp);
  //     }
  //   }, [state.isDragging, handleMouseMove, handleMouseUp]);

  //   const styles = useMemo(
  //     () => ({
  //       cursor: state.isDragging ? "-webkit-grabbing" : "-webkit-grab",
  //       transform: `translate(${state.translation.x}px, ${state.translation.y}px)`,
  //       transition: state.isDragging ? "none" : "transform 500ms",
  //       zIndex: state.isDragging ? 2 : 1,
  //       position: state.isDragging ? "absolute" : "relative"
  //     }),
  //     [state.isDragging, state.translation]
  //   );

  return (
    // <Container style={styles} onMouseDown={handleMouseDown}>
    <Container>
      <Content id={id}>{title}</Content>
    </Container>
  );
};

export default Card;
