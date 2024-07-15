import styled from "styled-components";
import CategoryTitle from "../CategoryTitle";
import banner from "./banner.png"
import image from "./programador.png";

const BannerStyles = styled.section`
  width: 100%;
  height: auto;
  background-color: #6bd1ff;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: inset 0px 0px 333px 75px #0b223f;
  display: flex;
  flex-direction: column;
  align-items: center;
	justify-content: center;
  padding: 40px 0;
  gap: 20px;

  @media (width > 1024px) {
    flex-direction: row-reverse;
    padding: 220px 60px;
    gap: 36px;
		align-items: flex-end;
  }
`;

const ImgContainerStyles = styled.figure`
  position: relative;
  border-radius: 15px;
  width: 70%;
  overflow: hidden;

  @media (width > 1024px) {
    width: 500px;
    min-width: 600px;
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: inset 0px 0px 10px 8px #6bd1ff;
`;

const CourseImgStyles = styled.img`
  width: 100%;
`;

const DescriptionContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  color: var(--secondary-white);
  padding-bottom: 40px;

  @media (width > 1024px) {
    width: auto;
    gap: 67px;
    align-items: start;
    padding-bottom: 0;
  }
`;

const DescriptionTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 300;

  @media (width > 1024px) {
    font-size: 4rem;
    font-weight: 700;
  }
`;

const DescriptionStyles = styled.p`
  font-size: 1.8rem;
  font-weight: 400;
  @media (width > 1024px) {
    font-size: 2.4rem;
  }
`;

const Banner = () => {
  return (
    <BannerStyles>
      <ImgContainerStyles>
        <CourseImgStyles
          src={image}
          alt="imagen de fondo"
        />
        <Shadow />
      </ImgContainerStyles>
      <DescriptionContainer>
        <CategoryTitle color="#6bd1ff">Front End</CategoryTitle>
        <div>
          <DescriptionTitle>Challenge React</DescriptionTitle>
          <DescriptionStyles>
            Este challenge es una forma de aprendizaje. Es un mecanismo donde
            podrás comprometerte en la resolución de un problema para poder
            aplicar todos los conocimientos adquiridos en la formación React.
          </DescriptionStyles>
        </div>
      </DescriptionContainer>
    </BannerStyles>
  );
};

export default Banner;
