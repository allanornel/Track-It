import styled from "styled-components";
// import UserContext from "./../context/UserContext";
// import { useContext } from "react";

export default function ChecaHabitos({
	habitos,
	setPorcentoHabito,
	porcentoHabito,
}) {
	// const { user, setUser } = useContext(UserContext);

	let total = habitos.length;
	let habitosCheck = 0;
	habitos.forEach((habito) => {
		if (habito.done) habitosCheck++;
	});

	setPorcentoHabito(Math.ceil((habitosCheck / total) * 100));

	if (habitosCheck === 0) {
		return (
			<>
				<h3>Nenhum hábito concluído ainda</h3>
			</>
		);
	} else {
		return (
			<>
				<P>{porcentoHabito}% dos hábitos concluídos</P>
			</>
		);
	}
}

const P = styled.p`
	font-size: 17.976px;
	line-height: 22px;
	color: #8fc549;
`;
