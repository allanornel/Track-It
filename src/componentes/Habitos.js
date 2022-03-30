import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

export default function Habitos() {
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
            <form>
              <input placeholder="nome do hábito" required></input>
              <Dias>
                <div>D</div>
                <div>S</div>
                <div>T</div>
                <div>Q</div>
                <div>Q</div>
                <div>S</div>
                <div>S</div>
              </Dias>
            </form>
          </CriacaoHabito>
          <NenhumHabito>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </NenhumHabito>
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
`;

const Dias = styled.div`
  display: flex;
  margin-left: 19px;

  div {
    margin-right: 4px;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    box-sizing: border-box;
    border-radius: 5px;
    text-align: center;
  }
`;
