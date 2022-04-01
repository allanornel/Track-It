import axios from "axios";
import { useEffect, useContext, useState } from "react";
import UserContext from "../context/UserContext";
import Footer from "./Footer";
import Header from "./Header";
import styled from "styled-components";

export default function Historico() {
	const [histHabitos, setHistHabitos] = useState([]);
	const { user } = useContext(UserContext);

	useEffect(() => {
		const URL =
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily";
		const config = {
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		};
		const promise = axios.get(URL, config);
		promise.then((response) => {
			console.log(response);
			setHistHabitos(response.data);
		});
		promise.catch((error) => console.log(error.data));
	}, [user.token]);

	return (
		<>
			<Header />
			<Container>
				<h1>Histórico</h1>
				{histHabitos.length === 0 ? (
					<p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
				) : (
					<p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
					// histHabitos.map((habito) => {
					// 	return (
					// 		<>
					// 			<p>Day: {habito.day} </p>
					// 			{habito.habits.map((habit) => (
					// 				<p>
					// 					id: {habit.id} name: {habit.name} date: {habit.date}{" "}
					// 					weekDay: {habit.weekDay} historyId: {habit.historyId}
					// 				</p>
					// 			))}
					// 		</>
					// 	);
					// })
				)}
			</Container>
			<Footer />
		</>
	);
}

const Container = styled.div`
	background-color: #f2f2f2;
	height: 100vh;
	p {
		font-weight: 400;
		font-size: 17.976px;
		line-height: 22px;

		color: #666666;
	}

	h1 {
		font-size: 22.976px;
		line-height: 29px;
		color: #126ba5;
		padding-top: 81px;
		margin-bottom: 17px;
	}
`;
