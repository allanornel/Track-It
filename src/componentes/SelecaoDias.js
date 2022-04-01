import { useState } from "react";
import styled from "styled-components";

export default function SelecaoDias({
	id,
	daysSelecionado,
	setDaysSelecionado,
}) {
	const [selecionado, setSelecionado] = useState(false);
	let dia = "";
	if (id === 0) dia = "D";
	if (id === 1 || id === 5 || id === 6) dia = "S";
	if (id === 2) dia = "T";
	if (id === 3 || id === 4) dia = "Q";

	return (
		<Div selecionado={selecionado} onClick={clicarDia}>
			{dia}
		</Div>
	);

	function clicarDia() {
		if (!selecionado) {
			setSelecionado(true);
			setDaysSelecionado([...daysSelecionado, id]);
		} else {
			setSelecionado(false);
			let newArr = daysSelecionado.filter(
				(daysSelecionados) => daysSelecionados !== id
			);
			setDaysSelecionado(newArr);
		}
	}
}

const Div = styled.div`
	background: ${(props) => (!props.selecionado ? "#FFFFFF" : "#CFCFCF")};
	border: 1px solid ${(props) => (!props.selecionado ? "#CFCFCF" : "#D5D5D5")};
	color: ${(props) => (!props.selecionado ? "#DBDBDB" : "#FFFFFF")};
`;
