import homeActive from "./home-active.png";
import homeInactive from "./home-inactive.png";
import addActive from "./add-active.png";
import addInactive from "./add-inactive.png";
import Button from "../Button";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderStyles = styled.header`
  width: 100%;
  height: 100px;
  min-height: 100px;
  background-color: var(--secondary-background-dark-blue);
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (width > 1024px) {
    position: relative;
    justify-content: space-between;
    height: 125px;
    min-height: 125px;
    padding: 0 40px;
  }
`;

const ShadowStyles = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--main-color-blue);

  @media (width > 1024px) {
    bottom: 0;
    top: auto;
  }
`;

export const LogoStyles = styled.img`
  display: none;

  @media (width > 1024px) {
    display: block;
    height: 40px;
    width: auto;
  }
`;

const ButtonContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;

  @media (width > 1024px) {
    width: auto;
    gap: 25px;
  }
`;

const Header = ({ logo }) => {
  return (
    <HeaderStyles>
      <ShadowStyles />
      <Link to="/">
        <LogoStyles src={logo} alt="Logo AluraFlix" />
      </Link>
      <ButtonContainer>
        <Button path="/" iconActive={homeActive} iconInactive={homeInactive}>
          Home
        </Button>
        <Button path="/add" iconActive={addActive} iconInactive={addInactive}>
          Nuevo video
        </Button>
      </ButtonContainer>
    </HeaderStyles>
  );
};

export default Header;
