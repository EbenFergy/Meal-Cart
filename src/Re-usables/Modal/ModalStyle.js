import styled from "styled-components";

export const ModalStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: fit-content;
  height: fit-content;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  /* border: 5px solid; */
`;

export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 10;
  /* border: 5px solid; */
`;
