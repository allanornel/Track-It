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

	return (
		<>
			<Header />
			<Main>
				<Container>
					<h2>Segunda, 17/05</h2>
					<p>Nenhum hábito concluído ainda</p>
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
	p {
		font-size: 17.976px;
		line-height: 22px;

		color: #bababa;
	}
`;

const Main = styled.main`
	margin: auto 18px;
`;
