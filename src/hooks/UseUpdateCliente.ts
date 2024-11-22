import { useState, type SetStateAction } from "react"
import type { ClientesFetch } from "../Interfaces/ClientesFetch"
import { UseCliente } from "./UseCliente"
import { apiCep } from "../services/api-cep"

export default function UseUpdateItems(itemId: string | undefined) {
  const clientContext = UseCliente()
  const clientFind = clientContext.clientes.find(client => client.codigo === Number(itemId)) as ClientesFetch

  const [codigo, _] = useState(clientFind.codigo);
  const [loja, setLoja] = useState(clientFind.loja);
	const [nome, setNome] = useState(clientFind.nome);
	const [fisicaJuridica, setFisicaJuridica] = useState(clientFind.fisicaJuridica);
	const [fantasia, setFantasia] = useState(clientFind.fantasia);
	const [cep, setCep] = useState(clientFind.cep);
	const [estado, setEstado] = useState(clientFind.endereco);
	const [endereco, setEndereco] = useState(clientFind.endereco);
	const [bairro, setBairro] = useState(clientFind.bairro);
	const [codigoMunicipio, setCodigoMunicipio] = useState(Number(clientFind.codigoMunicipio));
	const [municipio, setMunicipio] = useState(clientFind.municipio);
	const [pais, setPais] = useState(clientFind.pais);
	const [telefone, setTelefone] = useState(clientFind.telefone);
	const [cnpjCpf, setCnpjCpf] = useState(clientFind.cnpjCpf);
	const [dataNascimento, setDataNascimento] = useState(clientFind.dataNascimento);
	const [email, setEmail] = useState(clientFind.email);
	const [homePage, setHomePage] = useState(clientFind.homePage);
	const [tipo, setTipo] = useState(clientFind.tipo);

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

  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault()

    const client: ClientesFetch = {
      codigo: codigo,
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
    }

    clientContext.updateCliente(client)

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
		setDataNascimento(new Date());
		setEmail("");
		setHomePage("");
		setTipo("");
  }


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