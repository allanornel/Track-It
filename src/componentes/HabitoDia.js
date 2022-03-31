import axios from "axios";
import styled from "styled-components";
import check from "./../assets/img/check.svg";
import { useContext } from "react";
import UserContext from "../context/UserContext";

export default function HabitoDia({
  name,
  done,
  highestSequence,
  currentSequence,
  id,
}) {
  const { user } = useContext(UserContext);
  const config = {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  };

  async function clickHabito() {
    if (done) {
      let URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
      try {
        const promise = await axios.post(URL, config);
        const { data } = promise;
        console.log(promise);
        console.log(data);
      } catch (error) {
        console.log(error.response);
        console.log(error.response.status);
      }
    } else {
      let URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
      try {
        const promise = await axios.post(URL, config);
        const { data } = promise;
        console.log(promise);
        console.log(data);
      } catch (error) {
        console.log(error.response);
        console.log(error.response.status);
      }
    }
  }

  return (
    <>
      <ContainerHabito>
        <section>
          <h2>{name}</h2>
          <section>
            <p>Sequência atual: {currentSequence} dias</p>
            <p>Seu recorde: {highestSequence} dias</p>
          </section>
        </section>
        <div done={done} onClick={clickHabito}>
          <img src={check} alt=""></img>
        </div>
      </ContainerHabito>
    </>
  );
}

const ContainerHabito = styled.div`
  padding-left: 13px;
  width: 340px;
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;

  border-radius: 5px;
  color: #666666;

  h2 {
    font-size: 19.976px;
    line-height: 25px;
  }
  p {
    font-size: 12.976px;
    line-height: 16px;
  }

  div {
    width: 69px;
    height: 69px;
    margin-right: 13px;
    background: ${(props) => (!props.done ? "#EBEBEB" : "#8FC549")};
    border: 1px solid #e7e7e7;
    box-sizing: border-box;
    border-radius: 5px;
    align-items: center;
    display: flex;
    justify-content: center;
  }
`;
