import { Link } from "react-router-dom";
import logo from "./../assets/img/logo.svg";
import styled from "styled-components";

export default function PaginaInicial() {
	return (
		<>
			<Container>
				<img src={logo} alt="" />
				<Form>
					<input type="email" placeholder="email" required />
					<input type="password" placeholder="senha" required />
					<button type="submit">Entrar</button>
				</Form>
				<Link to={"/cadastro"}>
					<p>Não tem uma conta? Cadastre-se</p>
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
