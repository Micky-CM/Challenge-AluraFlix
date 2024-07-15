import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components";

const PlayerContainer = styled.section`
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

const TitleContainer = styled.div`
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
`;

const VideoContainer = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Player = () => {
  const [video, setVideo] = useState([])
  const params = useParams()
  useEffect(()=>{
    fetch(`https://my-json-server.typicode.com/Micky-CM/DataBase-AluraFlix/videos?id=${params.id}`)
      .then(response=> response.json())
      .then(data=>{
        setVideo(...data)
      })
  }, [])
  return(
    <>
      <PlayerContainer>
        <TitleContainer>
          <h1>Player</h1>
        <VideoContainer>
          <iframe width="100%" height="100%"
            src={video.url}
            title={video.title}
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </VideoContainer>
        </TitleContainer>
      </PlayerContainer>
    </>
  )
}

export default Player