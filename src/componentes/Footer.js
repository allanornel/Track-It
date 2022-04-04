import { useContext } from "react";
import UserContext from "./../context/UserContext";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function Footer() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Container>
        <Link to={"/habitos"}>
          <p>Hábitos</p>
        </Link>
        <Link to={"/hoje"}>
          <div>
            <CircularProgressbar
              value={user.porcentagem}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#3e98c7",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
            <text>Hoje</text>
          </div>
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
  justify-content: space-around;
  align-items: center;
  position: fixed;
  height: 70px;
  bottom: 0;
  left: 0px;
  right: 0;
  background-color: #ffffff;
  a {
    text-decoration: none;
  }

  svg {
    position: absolute;
    width: 91px;
    height: 91px;
  }
  text {
    position: absolute;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;

    color: #ffffff;
  }

  div {
    position: relative;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-bottom: 35px;
  }

  p {
    font-size: 17.976px;
    line-height: 22px;
    color: #52b6ff;
  }
`;
