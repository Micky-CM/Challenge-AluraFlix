import styled from "styled-components";
import CategoryTitle from "../CategoryTitle"
import Card from "../Card";
import { useContext } from "react";
import { GlobalContext } from "../../context/Context";

const SectionStyles = styled.section`
  width: 100%;
  background-color: var(--main-background-black);
  padding: 40px 27px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 40px;

  @media (width > 1024px) {
    align-items: start;
    padding: 62px;
  }
`;

const CourseContainer = styled.div`
  width: 100%;
  display: flex;
  overflow-x: auto;
  gap: 30px;
  scrollbar-width: thin;
  scrollbar-color: var(--main-color-blue) var(--scrollbar-color);
  padding-bottom: 12px;

  @media (width > 1024px) {
    align-self: flex-start;
  }
`;

const CategorySection = ({ category }) => {
  const { videos } = useContext(GlobalContext);
  const { color, name } = category;

  return (
    <>
      {videos.length > 0 && (
        <SectionStyles>
          <CategoryTitle color={color}>{name}</CategoryTitle>
          <CourseContainer>
            {videos
              .filter((video) => video.category === name)
              .map((video) => (
                <Card color={color} key={video.id} video={video} />
              ))}
          </CourseContainer>
        </SectionStyles>
      )}
    </>
  );
};

export default CategorySection;
