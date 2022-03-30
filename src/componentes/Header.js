import styled from "styled-components";
import { useContext } from "react";
import UserContext from "./../context/UserContext";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Container>
        <h1>TrackIt</h1>
        <img src={user.image} alt=""></img>
      </Container>
    </>
  );
}

const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  align-items: center;
  font-family: "Playball";
  font-style: normal;
  font-weight: 400;
  font-size: 38.982px;
  line-height: 49px;
  color: #ffffff;

  h1 {
    margin-left: 18px;
  }

  img {
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
    margin-right: 18px;
  }
`;
