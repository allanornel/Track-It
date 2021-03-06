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
  count,
  setCount,
}) {
  const { user } = useContext(UserContext);
  async function clickHabito() {
    if (done === 1) {
      let URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      try {
        const promise = await axios.post(URL, null, config);
        const { data } = promise;
        console.log(promise);
        console.log(data);
        setCount(count + 1);
      } catch (error) {
        console.log(error.response);
        console.log(error.response.status);
      }
    } else {
      let URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      try {
        const promise = await axios.post(URL, null, config);
        const { data } = promise;
        console.log(promise);
        console.log(data);
        setCount(count + 1);
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
            <p>
              Sequência atual: <Atual done={done}>{currentSequence} dias</Atual>
            </p>
            <p>
              Seu recorde:{" "}
              <Highest current={currentSequence} highest={highestSequence}>
                {" "}
                {highestSequence} dias
              </Highest>
            </p>
          </section>
        </section>
        <Div done={done} onClick={clickHabito}>
          <img src={check} alt=""></img>
        </Div>
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
  margin-bottom: 10px;
  margin-left: 18px;
  margin-right: 18px;

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
`;

const Atual = styled.span`
  color: ${(props) => (props.done === 0 ? "#666666" : "#8FC549")};
`;

const Highest = styled.span`
  color: ${(props) =>
    props.current !== props.highest ? "#666666" : "#8FC549"};
`;

const Div = styled.div`
  width: 69px;
  height: 69px;
  margin-right: 13px;
  background: ${(props) => (props.done === 0 ? "#EBEBEB" : "#8FC549")};
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  border-radius: 5px;
  align-items: center;
  display: flex;
  justify-content: center;
`;
