import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <>
      <Container>
        <Link to={"/habitos"}>
          <p>Hábitos</p>
        </Link>
        <Link to={"/hoje"}>
          <div>Hoje</div>
        </Link>
        <Link to={"/historico"}>
          <p>Histórico</p>
        </Link>
      </Container>
    </>
  );
}

const Container = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  height: 70px;
  bottom: 0;
  left: 0px;
  right: 0;
  background-color: #ffffff;
`;
