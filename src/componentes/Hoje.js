import axios from "axios";
import { useEffect, useState, useContext } from "react";
import UserContext from "./../context/UserContext";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";
import HabitoDia from "./HabitoDia";

export default function Hoje() {
	const { user } = useContext(UserContext);
	const [habitos, setHabitos] = useState([]);
	const [count, setCount] = useState(0);

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
		if (habitosCheck === 0)
			return (
				<>
					<h3>Nenhum hábito concluído ainda</h3>
				</>
			);
		else {
			console.log(habitosCheck);
			console.log(total);
			let porcentoHabito = Math.ceil((habitosCheck / total) * 100);

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
					<h2>Segunda, 17/05</h2>
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
			<Footer />
		</>
	);
}

const Container = styled.div`
	margin-top: 99px;
	h2 {
		font-size: 22.976px;
		line-height: 29px;
		color: #126ba5;
	}
	h3 {
		font-size: 17.976px;
		line-height: 22px;
		color: #bababa;
	}
`;

const Main = styled.main`
	margin: auto 18px;
`;

const P = styled.p`
	font-size: 17.976px;
	line-height: 22px;
	color: #8fc549;
`;
