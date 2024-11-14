import { type SetStateAction, useState } from "react";
import { UseCliente } from "./UseCliente";
import { apiCep } from "../services/api-cep";

export function UseNewCliente() {
	const [loja, setLoja] = useState("");
	const [nome, setNome] = useState("");
	const [fisicaJuridica, setFisicaJuridica] = useState("");
	const [fantasia, setFantasia] = useState("");
	const [cep, setCep] = useState("");
	const [estado, setEstado] = useState("");
	const [endereco, setEndereco] = useState("");
	const [bairro, setBairro] = useState("");
	const [codigoMunicipio, setCodigoMunicipio] = useState(0);
	const [municipio, setMunicipio] = useState("");
	const [pais, setPais] = useState("");
	const [telefone, setTelefone] = useState("");
	const [cnpjCpf, setCnpjCpf] = useState("");
	const [dataNascimento, setDataNascimento] = useState("");
	const [email, setEmail] = useState("");
	const [homePage, setHomePage] = useState("");
	const [tipo, setTipo] = useState("");
	const { createCliente } = UseCliente();

	const settingCep = async (ev: {
		target: { value: SetStateAction<string> };
	}) => {
		setCep(ev.target.value);

		setEstado("");
		setEndereco("");
		setBairro("");
		setCodigoMunicipio(0);
		setMunicipio("");
	};

	const handleCep = async () => {
		if (cep.length >= 8) {
			await apiCep.get(`${cep}`).then((res) => {
				setEstado(res.data.uf);
				setEndereco(res.data.logradouro);
				setBairro(res.data.bairro);
				setCodigoMunicipio(res.data.ibge);
				setMunicipio(res.data.localidade);
			});
		}
	};

	const handleClick = (ev: { preventDefault: () => void }) => {
		ev.preventDefault();

		const cliente = {
			loja: loja,
			nome: nome,
			fisicaJuridica: fisicaJuridica,
			fantasia: fantasia,
			cep: cep,
			estado: estado,
			endereco: endereco,
			bairro: bairro,
			codigoMunicipio: Number(codigoMunicipio),
			municipio: municipio,
			pais: pais,
			telefone: telefone,
			cnpjCpf: cnpjCpf,
			dataNascimento: new Date(dataNascimento),
			email: email,
			homePage: homePage,
			tipo: tipo,
		};

		setLoja("");
		setNome("");
		setFisicaJuridica("");
		setFantasia("");
		setCep("");
		setEstado("");
		setEndereco("");
		setBairro("");
		setCodigoMunicipio(0);
		setMunicipio("");
		setPais("");
		setTelefone("");
		setCnpjCpf("");
		setDataNascimento("");
		setEmail("");
		setHomePage("");
		setTipo("");

		createCliente(cliente);
	};

	return {
		loja,
		setLoja,
		nome,
		setNome,
		fisicaJuridica,
		setFisicaJuridica,
		fantasia,
		setFantasia,
		cep,
		settingCep,
		handleCep,
		estado,
		setEstado,
		endereco,
		setEndereco,
		bairro,
		setBairro,
		codigoMunicipio,
		setCodigoMunicipio,
		municipio,
		setMunicipio,
		pais,
		setPais,
		telefone,
		setTelefone,
		cnpjCpf,
		setCnpjCpf,
		dataNascimento,
		setDataNascimento,
		email,
		setEmail,
		homePage,
		setHomePage,
		tipo,
		setTipo,
		handleClick,
	};
}
