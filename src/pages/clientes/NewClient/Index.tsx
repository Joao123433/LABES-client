import type { SetStateAction } from "react";
import { Container } from "./Styles";
import InputMask from "react-input-mask";
import { UseNewCliente } from "../../../hooks/UseNewCliente";

export function NewCliente() {
	const { loja, setLoja, nome, setNome, fisicaJuridica, setFisicaJuridica, fantasia, setFantasia, cep, settingCep, handleCep, estado, setEstado, endereco, setEndereco, bairro, setBairro, codigoMunicipio, setCodigoMunicipio, municipio, setMunicipio, pais, setPais, telefone, setTelefone, cnpjCpf, setCnpjCpf, dataNascimento, setDataNascimento, email, setEmail, homePage, setHomePage, tipo, setTipo, handleClick} = UseNewCliente()

	const settingCnpjCpf = (ev: { target: { value: SetStateAction<string>; }; }) => {
		setCnpjCpf(ev.target.value)
	}

	return (
		<>
			<form className="flex flex-col gap-4 items-end">
				<section className="flex flex-col gap-4">
					<div className="grid grid-cols-11 gap-4">
						<Container>
							<label htmlFor="">Loja</label>
							<input type="text" value={loja} onChange={(ev) => setLoja(ev.target.value)}/>
						</Container>

						<Container className="col-span-4">
							<label htmlFor="">Nome</label>
							<input type="text" value={nome} onChange={(ev) => setNome(ev.target.value)}/>
						</Container>

						<Container className="col-span-2">
							<label htmlFor="">Pessoa Fisica/Jurid</label>
							<input type="text" value={fisicaJuridica} onChange={(ev) => setFisicaJuridica(ev.target.value)}/>
						</Container>

						<Container className="col-span-2">
							<label htmlFor="">Nome Fantasia</label>
							<input type="text" value={fantasia} onChange={(ev) => setFantasia(ev.target.value)}/>
						</Container>

						<Container>
							<label htmlFor="">CEP</label>
							<input type="text" value={cep} onChange={settingCep} onKeyUp={handleCep} />
							{/* <InputMask mask={"99999999"} value={cep} onChange={settingCep} onKeyUp={handleCep} /> */}
						</Container>

						<Container>
							<label htmlFor="">Estado</label>
							<input type="text" value={estado} onChange={(ev) => setEstado(ev.target.value)} />
						</Container>
					</div>
					<div className="grid grid-cols-15 gap-4">
						<Container className="col-span-4">
							<label htmlFor="">Endereço</label>
							<input type="text" value={endereco} onChange={(ev) => setEndereco(ev.target.value)}/>
						</Container>

						<Container className="col-span-2">
							<label htmlFor="">Bairro</label>
							<input type="text" value={bairro} onChange={(ev) => setBairro(ev.target.value)} />
						</Container>

						<Container className="col-span-2">
							<label htmlFor="">Cd. Municipio</label>
							<input type="number" value={codigoMunicipio} onChange={(ev) => setCodigoMunicipio(ev.target.value)}/>
						</Container>

						<Container className="col-span-2">
							<label htmlFor="">Municipio</label> 
							<input type="text" value={municipio} onChange={(ev) => setMunicipio(ev.target.value)}/>
						</Container>

						<Container className="col-span-2">
							<label htmlFor="">Pais</label>
							<input type="text"  value={pais} onChange={(ev) => setPais(ev.target.value)}/>
						</Container>

						<Container className="col-span-3">
							<label htmlFor="">Telefone</label>
							<InputMask mask={"(99)99999-9999"} value={telefone} onChange={(ev) => setTelefone(ev.target.value)}/>
						</Container>
					</div>
					<div className="grid grid-cols-7 gap-4">
						<Container>
							<label htmlFor="">CNPJ/CPF</label>
							<input
								value={cnpjCpf}
								onChange={settingCnpjCpf}
							/>
						</Container>
						<Container>
							<label htmlFor="">DN</label>
							<input type="date" value={dataNascimento} onChange={(ev) => setDataNascimento(ev.target.value)}/>
						</Container>
						<Container className="col-span-2">
							<label htmlFor="">E-Mail</label>
							<input type="text" value={email} onChange={(ev) => setEmail(ev.target.value)}/>
						</Container>
						<Container className="col-span-2">
							<label htmlFor="">Home-Page</label>
							<input type="text" value={homePage} onChange={(ev) => setHomePage(ev.target.value)}/>
						</Container>
						<Container>
							<label htmlFor="">Tipo</label>
							<input type="text" value={tipo} onChange={(ev) => setTipo(ev.target.value)}/>
						</Container>
					</div>
				</section>

				<button type="button" className="py-3 px-4 hover:border-indigo-800" onClick={handleClick}>Salvar</button>
			</form>
		</>
	);
}
