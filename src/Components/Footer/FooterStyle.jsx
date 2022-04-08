import styled from "styled-components";

const FooterStyle = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: rgba(14, 17, 26, 1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  font-size: 0.8rem;
  font-weight: 100;

  svg {
    width: 1.2rem;
    color: #ffffff;
  }

  .footerIcons {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export default FooterStyle;
