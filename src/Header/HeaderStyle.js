import styled from "styled-components";
import headerImg from '../assets/header-img.jpg'

const HeaderStyle = styled.div`
  nav {
    display: flex;
    background-color: #ff593d;
    color: #ffff;
    justify-content: space-between;
    align-items: center;
    padding: 0 5rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: auto;
    transition: all 0.5s ease-in-out;
    opacity: 90%;
    z-index: 1;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: all 0.5s ease;

    :hover {
      transform: scale(1.05);
    }
  }

  .orderno {
    padding: 0.2rem 0.5rem;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .header-img {
    height: 422px;
    background-image:url(${headerImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    
  }
`;

export default HeaderStyle;
