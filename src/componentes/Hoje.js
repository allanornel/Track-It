import axios from "axios";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

export default function Hoje() {
  const location = useLocation();
  const [habitos, setHabitos] = useState([]);
  const { token, image } = location.state;

  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const promise = axios.get(URL, config);
    promise.then((response) => {
      console.log(response);
      setHabitos(response.data);
    });
    promise.catch((error) => console.log(error.data));
  }, [token]);

  return (
    <>
      <Header image={image} />
      <Main>
        <Container>
          <h2>Segunda, 17/05</h2>
          <p>Nenhum hábito concluído ainda</p>
        </Container>
        <div>
          {habitos.map((habito) => {
            return (
              <>
                <p>{habito.name}</p>
                <p>{habito.done}</p>
                <p>{habito.currentSequence}</p>
                <p>{habito.HighestSequence}</p>
              </>
            );
          })}
        </div>
      </Main>
      <Footer />
    </>
  );
}

const Container = styled.div`
  margin-top: 99px;
  h2 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  p {
    font-size: 17.976px;
    line-height: 22px;

    color: #bababa;
  }
`;

const Main = styled.main`
  margin: auto 18px;
`;
