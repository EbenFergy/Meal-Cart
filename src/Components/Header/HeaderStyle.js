import styled from "styled-components";
import headerImg from "../../assets/header-img.png";

const HeaderStyle = styled.div`
  width: 100%;
  background: #212121;
  background: linear-gradient(
    -90deg,
    rgba(14, 17, 26, 1) 0%,
    rgba(37, 46, 70, 1) 100%
  );
  height: 100vh;
  display: flex;
  /* display:none ; */
  flex-direction: column;
  /* position: fixed; */

  nav {
    display: flex;
    background: #212121;
    background: linear-gradient(
      -90deg,
      rgba(14, 17, 26, 0.9) 0%,
      rgba(37, 46, 70, 0.9) 100%
    );
    color: #ffff;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 5rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    transition: all 0.5s ease-in-out;
    z-index: 1;
  }

  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    transition: all 0.5s ease;

    :hover {
      transform: scale(1.07);
    }
  }

  .orderno {
    padding: 0.2rem 0.5rem;
    border-radius: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .header-cont {
    display: flex;
    height: 100%;
  }

  .header-txt {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    text-align: right;
    font-weight: 800;
    width: 50%;
    /* border: 2px solid red; */
  }

  .header-Desc {
  }

  .header-Subdesc {
    font-size: 1.5rem;
    font-weight: 300;
  }
  .header-img {
    display: flex;
    align-items: center;
    width: 50%;
    /* border: 2px solid yellow; */
    height: 100%;
    background-image: url(${headerImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  /* .header-img img {
    width: 90%;
  } */

  .leaves {
    position: absolute;
    bottom: 40vh;
    right: 0;
    height: 15rem;
    opacity: 0.32;
  }

  .glassCard {
    position: absolute;
    top: 20vh;
    left: 31vw;
    height: 7rem;
    width: 16rem;
  }

  .glassCard:nth-child(2) {
    top: 80vh;
    left: 8vw;
  }
`;

export default HeaderStyle;
