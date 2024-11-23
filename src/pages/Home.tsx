import { Link } from "react-router-dom";

export function Home() {
	return (
		<>
			<h1 className="text-5xl">Dashboard</h1>
			<section className="flex flex-row gap-7 justify-between">
				<div className="w-1/4 py-4 px-7 bg-zinc-900 rounded-lg flex flex-col gap-7">
					<p>Inventário total</p>
					<p className="text-center text-4xl mb-6">10</p>
				</div>
				<div className="w-1/4 py-4 px-7 bg-zinc-900 rounded-lg flex flex-col gap-7">
					<p>Clientes Ativos</p>
					<p className="text-center text-4xl mb-6">7</p>
				</div>
				<div className="w-1/4 py-4 px-7 bg-zinc-900 rounded-lg flex flex-col gap-7">
					<p>Clientes Inativos</p>
					<p className="text-center text-4xl mb-6">6</p>
				</div>
				<div className="w-1/4 py-4 px-7 bg-zinc-900 rounded-lg flex flex-col gap-7">
					<p>Clientes Recentes</p>
					<p className="text-center text-4xl mb-6">1</p>
				</div>
			</section>
			<section className="flex flex-row gap-7 justify-between h-full">
				<table className="w-1/2 h-full">
					<thead className="bg-zinc-900 py-4 px-5 flex rounded-md">
						<tr className="w-full flex justify-between">
							<th className="w-2/4 text-left">Itens Recentes</th>
							<th className="w-2/4">Ações</th>
						</tr>
					</thead>
					<tbody className="py-1 px-5 flex flex-col gap-5 mt-3 overflow-y-scroll l h-5/6">
						<tr className="w-full flex justify-between">
							<td className="w-2/4 text-left">123</td>
							<td className="w-2/4 text-center">
								<Link to={`"/items/show/"`}>
									<button type="button" className="px-4 py-2 hover:scale-110">Ver</button>
								</Link>
							</td>
						</tr>
					</tbody>
				</table>
				<table className="w-1/2 h-full">
					<thead className="bg-zinc-900 py-4 px-5 flex rounded-md">
						<tr className="w-full flex justify-between">
							<th className="w-2/6 text-left">Itens Acabando</th>
							<th className="w-2/6 text-left">Qtd.</th>
							<th className="w-2/6 text-left">Ações</th>
						</tr>
					</thead>
					<tbody className="py-1 px-5 flex flex-col gap-5 mt-3 overflow-y-scroll h-5/6">
								<tr className="w-full flex justify-between">
									<td className="w-2/6">4566</td>
									<td className="w-2/6">123</td>
									<td className="w-2/6">
										<Link to={`"/items/show/"`}>
											<button type="button" className="px-4 py-2 hover:scale-110">Ver</button>
										</Link>
									</td>
								</tr>
					</tbody>
				</table>
			</section>
		</>
	)
}
