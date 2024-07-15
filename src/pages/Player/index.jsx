import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components";
import NotFound from "../NotFound";

const PlayerContainer = styled.section`
  background-color: var(--main-background-black);
  width: 100%;
  padding: 100px 50px 150px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const TitleContainer = styled.div`
  text-align: center;
  color: var(--secondary-white);

  h1 {
    font-size: 4.4rem;
    font-weight: bold;
    margin-bottom: 1.5rem
  }
`;

const VideoContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  iframe{
  height: 80vh;
}
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
  if (!video) return <NotFound />
  return(
    <>
      <PlayerContainer>
        <TitleContainer>
          <h1>{video.title}</h1>
        </TitleContainer>
        <VideoContainer>
          <iframe width="100%" height="100%"
            src={video.url}
            title={video.title}
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
          </iframe>
        </VideoContainer>
      </PlayerContainer>
    </>
  )
}

export default Player