import { Link } from "react-router-dom";
import { UseCliente } from "../../hooks/UseCliente";

export function Clientes() {
	const { clientes, deleteCliente } = UseCliente()

	return (
		<>
			<div className="overflow-y-scroll h-full">
				<table className="min-w-full overflow-y-scroll">
					<thead className="bg-zinc-900 py-1 px-5 flex rounded-md">
						<tr className="w-full flex justify-around">
							<th className="py-2 text-left w-1/5">Código</th>
							<th className="py-2 text-left w-1/5">Nome</th>
							<th className="py-2 text-left w-1/5">CPF/CNPJ</th>
							<th className="py-2 text-left w-1/5">Home Page</th>
							<th className="py-2 text-left w-1/5">Cidade</th>
							<th className="py-2 text-left w-1/4">Ações</th>
						</tr>
					</thead>
					<tbody className="py-1 px-5 flex flex-col">
						{clientes.length === 0
							?
								<tr>
									<td>
										<h1 className="text-3xl text-center mt-2">Insira Algum Cliente...</h1>
									</td>
								</tr>
							:
							clientes.map((cliente) => (
								<tr className="w-full flex gap-4" key={cliente.codigo}>
									<td className="py-2 w-1/5 break-words">{cliente.codigo}</td>
									<td className="py-2 w-1/5">{cliente.nome}</td>
									<td className="py-2 w-1/5">{cliente.cnpjCpf}</td>
									<td className="py-2 w-1/5">{cliente.homePage}</td>
									<td className="py-2 w-1/5">{cliente.cidade}</td>
									<td className="py-2 w-1/4 flex gap-5">
										<Link to={`${cliente.codigo}`} className="text-black">
											<button type="button" className="bg-blue-500 px-3 py-1 border-0 hover:scale-105 rounded-sm">
												Ver
											</button>
										</Link>
										<Link to={`/items/update/${cliente.codigo}`} className="text-black">
											<button type="button" className="bg-white px-3 py-1 border-0 hover:scale-105 rounded-sm">
												Atualizar
											</button>
										</Link>
										<button type="button" className="bg-red-500 text-black px-3 py-1 border-0 hover:scale-105 rounded-sm" onClick={() => deleteCliente(cliente.codigo)}>
											Excluir
										</button>
									</td>
								</tr>
							))
						}
					</tbody>
				</table>
			</div>
		</>
	);
}
