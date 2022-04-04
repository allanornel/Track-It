import styled from "styled-components";
import UserContext from "./../context/UserContext";
import { useContext } from "react";

export default function ChecaHabitos() {
  const { user } = useContext(UserContext);

  if (user.porcentagem === 0) {
    return (
      <>
        <h3>Nenhum hábito concluído ainda</h3>
      </>
    );
  } else {
    return (
      <>
        <P>{user.porcentagem}% dos hábitos concluídos</P>
      </>
    );
  }
}

const P = styled.p`
  font-size: 17.976px;
  line-height: 22px;
  color: #8fc549;
`;
