import styled from "styled-components";
import { LogoStyles } from "../Header";
import { Link } from "react-router-dom";

const FooterStyles = styled.footer`
  position: relative;
  width: 100%;
  height: 125px;
  min-height: 125px;
  display: none;
  justify-content: center;
  align-items: center;
  background-color: var(--secondary-background-dark-blue);

  @media (width > 1024px) {
    display: flex;
  }
`;

const ShadowStyles = styled.div`
  width: 100%;
  height: 4px;
  position: absolute;
  top: 0;
  background-color: var(--main-color-blue);
`;

const Footer = ({ logo }) => {
  return (
    <FooterStyles>
      <ShadowStyles />
      <Link to="/">
        <LogoStyles src={logo} alt="Logo aluraFlix" />
      </Link>
    </FooterStyles>
  );
};

export default Footer;
