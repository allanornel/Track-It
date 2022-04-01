import styled from "styled-components";

export default function ListaDiasHabito({ arr }) {
	const days = [0, 1, 2, 3, 4, 5, 6];

	return (
		<>
			{days.map((day) => {
				let dia = "";
				if (day === 0) dia = "D";
				if (day === 1 || day === 5 || day === 6) dia = "S";
				if (day === 2) dia = "T";
				if (day === 3 || day === 4) dia = "Q";

				return <Div selecionado={arr.includes(day)}>{dia}</Div>;
			})}
		</>
	);
}

const Div = styled.div`
	background: ${(props) => (!props.selecionado ? "#FFFFFF" : "#CFCFCF")};
	border: 1px solid ${(props) => (!props.selecionado ? "#CFCFCF" : "#D5D5D5")};
	color: ${(props) => (!props.selecionado ? "#DBDBDB" : "#FFFFFF")};
`;
