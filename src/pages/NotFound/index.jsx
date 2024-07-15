import styled from "styled-components";

const NotFoundContainer = styled.section`
  background-color: var(--main-background-black);
  width: 100%;
  padding: 100px 50px 150px;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 60px;

  @media (width > 1024px) {
    justify-content: center;
  }
`;

const NotFoundTitle = styled.div`
  text-align: center;
  color: var(--secondary-white);
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  gap: 10px;

  h1 {
    font-size: 4rem;
    font-weight: bold;
  }
  p {
    font-size: 3.2rem;
    font-weight: bold;
  }
`;

const NotFound = () => {
  return (
    <>
      <NotFoundContainer>
        <NotFoundTitle>
          <h1>Error 404</h1>
          <p>Página no encontrada</p>
        </NotFoundTitle>
      </NotFoundContainer>
    </>
  )
}

export default NotFound