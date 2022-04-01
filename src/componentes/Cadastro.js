import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/img/logo.svg";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Cadastro() {
	const [disabled, setDisabled] = useState(false);
	const [logando, setLogando] = useState(false);
	const [objCadastro, setObjCadastro] = useState({
		email: "",
		name: "",
		image: "",
		password: "",
	});
	let navigate = useNavigate();

	async function signUp(e) {
		e.preventDefault();
		setLogando(true);
		setDisabled(true);
		console.log(objCadastro);
		const URL =
			"https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
		try {
			const promise = await axios.post(URL, objCadastro);
			const { data } = promise;
			console.log(data);
			navigate("/");
		} catch (error) {
			console.log(error.response);
			console.log(error.response.status);
			alert("Houve falha no cadastro!!!");
			setDisabled(false);
			setLogando(false);
		}
	}

	return (
		<>
			<Container>
				<img src={logo} alt="" />
				<Form onSubmit={(e) => signUp(e)}>
					<input
						disabled={disabled}
						type="email"
						placeholder="email"
						value={objCadastro.email}
						required
						onChange={(e) =>
							setObjCadastro({ ...objCadastro, email: e.target.value })
						}
					/>
					<input
						disabled={disabled}
						type="password"
						placeholder="senha"
						value={objCadastro.password}
						required
						onChange={(e) =>
							setObjCadastro({ ...objCadastro, password: e.target.value })
						}
					/>
					<input
						disabled={disabled}
						type="text"
						placeholder="nome"
						value={objCadastro.name}
						required
						onChange={(e) =>
							setObjCadastro({ ...objCadastro, name: e.target.value })
						}
					/>
					<input
						disabled={disabled}
						type="text"
						placeholder="foto"
						value={objCadastro.image}
						required
						onChange={(e) =>
							setObjCadastro({ ...objCadastro, image: e.target.value })
						}
					/>
					<button disabled={disabled} type="submit">
						{!logando ? "Cadastrar" : <ThreeDots color="#FFFFFF" />}
					</button>
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

	button {
		width: 303px;
		height: 45px;
		margin-bottom: 6px;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	input {
		width: 303px;
		height: 45px;
		margin-bottom: 6px;
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
