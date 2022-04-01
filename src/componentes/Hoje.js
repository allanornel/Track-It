import axios from "axios";
import { useEffect, useState, useContext } from "react";
import UserContext from "./../context/UserContext";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import HabitoDia from "./HabitoDia";
import dayjs from "dayjs";

export default function Hoje() {
	const { user, setUser } = useContext(UserContext);
	const [habitos, setHabitos] = useState([]);
	const [count, setCount] = useState(0);
	let dia = "";
	let day = dayjs().day();
	if (day === 0) dia = "Domingo";
	if (day === 1) dia = "Segunda";
	if (day === 2) dia = "Terça";
	if (day === 3) dia = "Quarta";
	if (day === 4) dia = "Quinta";
	if (day === 5) dia = "Sexta";
	if (day === 6) dia = "Sábado";

	let data = dayjs().format("DD/MM");
	const [porcentoHabito, setPorcentoHabito] = useState(0);

	// ERRO DE TENTAR USAR O useContext no porcentoHabito.
	// setUser({ ...user, porcentoHabito });
	// useEffect(
	// 	() => setUser({ ...user, porcentoHabito }),
	// 	[porcentoHabito, user, setUser]
	// );

	useEffect(() => {
		const URL =
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
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

	function ChecaHabitos() {
		let total = habitos.length;
		let habitosCheck = 0;
		habitos.forEach((habito) => {
			if (habito.done) habitosCheck++;
		});
		if (habitosCheck === 0) {
			setPorcentoHabito(Math.ceil((habitosCheck / total) * 100));

			return (
				<>
					<h3>Nenhum hábito concluído ainda</h3>
				</>
			);
		} else {
			setPorcentoHabito(Math.ceil((habitosCheck / total) * 100));

			console.log(porcentoHabito);

			return (
				<>
					<P>{porcentoHabito}% dos hábitos concluídos</P>
				</>
			);
		}
	}

	return (
		<>
			<Header />
			<Main>
				<Container>
					<h2>
						{dia}, {data}
					</h2>
					<ChecaHabitos />
				</Container>
				<div>
					{habitos.map((habito) => {
						console.log(habito);
						return (
							<>
								<HabitoDia
									key={habito.id + habito.name}
									name={habito.name}
									done={habito.done ? 1 : 0}
									currentSequence={habito.currentSequence}
									highestSequence={habito.highestSequence}
									id={habito.id}
									count={count}
									setCount={setCount}
								/>
							</>
						);
					})}
				</div>
			</Main>
			<Footer percentage={porcentoHabito} />
		</>
	);
}

const Container = styled.div`
	margin: auto 18px;
	margin-bottom: 28px;
	h2 {
		font-size: 22.976px;
		line-height: 29px;
		color: #126ba5;
		padding-top: 20px;
	}
	h3 {
		font-size: 17.976px;
		line-height: 22px;
		color: #bababa;
	}
`;

const Main = styled.main`
	background: #f2f2f2;
	margin: 71px auto;
	height: 100vh;
	width: 100wh;
`;

const P = styled.p`
	font-size: 17.976px;
	line-height: 22px;
	color: #8fc549;
`;
