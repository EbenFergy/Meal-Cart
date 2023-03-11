import styled from "styled-components";
import { COLORS } from "../../styles/COLORS";

const AuthStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  /* border: 2px solid; */

  .buttons {
    width: 50vw;
    max-width: 25rem;
    margin-bottom: 1rem;
  }
  #signUp {
    font-weight: 600;
    font-size: 1.1rem;
    cursor: pointer;
    margin-left: 10px;
  }
  #signUp:hover {
    text-decoration: underline;
  }
`;
export default AuthStyle;
