import { Link } from "react-router-dom";

export function Clientes() {
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
							<th className="py-2 text-left w-1/5">Ativo</th>
							<th className="py-2 text-left w-1/4">Ações</th>
						</tr>
					</thead>
					<tbody className="py-1 px-5 flex flex-col">
						<tr className="w-full flex gap-4">
							<td className="py-2 w-1/5 break-words">asdf</td>
							<td className="py-2 w-1/5">asdf</td>
							<td className="py-2 w-1/5">unid.</td>
							<td className="py-2 w-1/5">unid.</td>
							<td className="py-2 w-1/5">asdf</td>
							<td className="py-2 w-1/4 flex gap-5">
								<Link to={`"/items/show/"`} className="text-black">
									<button type="button" className="bg-blue-500 px-3 py-1 border-0 hover:scale-105 rounded-sm">
										Ver
									</button>
								</Link>
								<Link to={`"/items/update/"`} className="text-black">
									<button type="button" className="bg-white px-3 py-1 border-0 hover:scale-105 rounded-sm">
										Atualizar
									</button>
								</Link>
								<button type="button" className="bg-red-500 text-black px-3 py-1 border-0 hover:scale-105 rounded-sm">
									Excluir
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</>
	);
}
