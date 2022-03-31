import styled from "styled-components";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState, useContext } from "react";
import UserContext from "./../context/UserContext";
import SelecaoDias from "./SelecaoDias";

export default function Habitos() {
  const { user } = useContext(UserContext);
  const [daysSelecionado, setDaysSelecionado] = useState([]);
  const [habitos, setHabitos] = useState([]);
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const days = [0, 1, 2, 3, 4, 5, 6];

  async function cadastroHabito(e) {
    e.preventDefault();
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const objCadastro = {
      name: name,
      days: daysSelecionado,
    };
    try {
      const promise = await axios.post(URL, objCadastro, config);
      const { data } = promise;
      console.log(promise);
      console.log(data);
      setCount(count + 1);
    } catch (error) {
      console.log(error.response);
      console.log(error.response.status);
    }
  }

  // Listagem dos Habitos
  useEffect(() => {
    const URL =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    };
    const promise = axios.get(URL, config);
    promise.then((response) => {
      console.log(response);
      setHabitos(response.data);
    });
    promise.catch((error) => console.log(error.data));
  }, [user.token, count]);

  // function deleteHabito(id)  {
  //   const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${user.token}`,
  //     },
  //   };
  //   const promise = await axios.request(URL);
  // }

  return (
    <>
      <Header />
      <Main>
        <ContainerMain>
          <Container>
            <h2>Meus hábitos</h2>
            <div>
              <p>+</p>
            </div>
          </Container>
          <CriacaoHabito>
            <form onSubmit={(e) => cadastroHabito(e)}>
              <input
                value={name}
                placeholder="nome do hábito"
                required
                onChange={(e) => setName(e.target.value)}
              ></input>

              <Dias>
                {days.map((day) => {
                  return (
                    <SelecaoDias
                      key={day}
                      id={day}
                      daysSelecionado={daysSelecionado}
                      setDaysSelecionado={setDaysSelecionado}
                    />
                  );
                })}
              </Dias>
              <section>
                <p>Cancelar</p>
                <button>Salvar</button>
              </section>
            </form>
          </CriacaoHabito>
          <NenhumHabito>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </NenhumHabito>
          {habitos.map((habito) => (
            <p key={habito.id}>
              {habito.id} {habito.name} {habito.days.map((day) => day + " ")}
            </p>
          ))}
        </ContainerMain>
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.main`
  background: #f2f2f2;
  margin-top: 71px;
  height: 100vh;
  margin-bottom: 90px;

  h2 {
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  margin-bottom: 28px;
  div {
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-weight: 400;
    font-size: 26.976px;
    line-height: 34px;
    color: #ffffff;
    display: flex;
    justify-content: center;
  }

  p {
    margin: -1px auto;
  }
`;

const NenhumHabito = styled.p`
  font-weight: 400;
  font-size: 17.976px;
  line-height: 22px;

  color: #666666;
`;

const ContainerMain = styled.div`
  margin: auto 18px;
`;

const CriacaoHabito = styled.div`
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  margin-bottom: 29px;

  button {
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
    width: 84px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
  }

  input {
    margin-top: 18px;
    margin-left: 19px;
    margin-bottom: 10px;
    padding-left: 9px;
    width: 303px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
  }
  section {
    display: flex;
    margin-top: 29px;
    justify-content: end;
    margin-right: 16px;
    align-items: center;
  }

  section p {
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    margin-right: 23px;
    color: #52b6ff;
  }
`;

const Dias = styled.div`
  display: flex;
  margin-left: 19px;

  div {
    margin-right: 4px;
    font-size: 19.976px;
    line-height: 25px;
    width: 30px;
    height: 30px;
    box-sizing: border-box;
    border-radius: 5px;
    text-align: center;
  }
`;
