import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import logo from "./Logo.png";
import GlobalContextProvider from "../../context/Context";
import styled from "styled-components";

const MainContainer = styled.main`
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
`;

const BasePage = () => {
  return (
    <MainContainer >
      <Header logo={logo} style={{zIndex:2}} />
      <GlobalContextProvider>
        <Outlet />
      </GlobalContextProvider>
      <Footer logo={logo} />
    </MainContainer>
  );
};

export default BasePage;
