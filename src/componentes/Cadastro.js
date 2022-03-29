import { Link } from "react-router-dom";
import logo from "./../assets/img/logo.svg";
import styled from "styled-components";

export default function Cadastro() {
	return (
		<>
			<Container>
				<img src={logo} alt="" />
				<Form>
					<input type="email" placeholder="email" required />
					<input type="password" placeholder="senha" required />
					<input type="text" placeholder="nome" required />
					<input type="text" placeholder="foto" required />
					<button type="submit">Cadastrar</button>
				</Form>
				<Link to={"/"}>
					<p>Já tem uma conta? Faça login!</p>
				</Link>
			</Container>
		</>
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-top: 68px;

	p {
		font-size: 13.976px;
		line-height: 17px;
		text-align: center;
		text-decoration-line: underline;
		color: #52b6ff;
	}
`;

const Form = styled.form`
	display: flex;
	flex-direction: column;
	margin-bottom: 25px;

	* {
		width: 303px;
		height: 45px;
		margin-bottom: 6px;
	}

	input {
		background: #ffffff;
		border: 1px solid #d5d5d5;
		border-radius: 5px;
		font-size: 19.976px;
		line-height: 25px;
		color: #dbdbdb;
		padding-left: 10px;
	}

	button {
		background: #52b6ff;
		border-radius: 4.63636px;
		font-size: 20.976px;
		line-height: 26px;
		text-align: center;
		color: #ffffff;
	}
`;
