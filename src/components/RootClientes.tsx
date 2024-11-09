import { Link, Outlet, useLocation } from "react-router-dom";

export function RootClientes() {
	const { pathname } = useLocation();

	return (
		<>
			<section className="border-solid border-b border-white flex gap-4">
				<Link
					to="/clientes"
					className={`text-white hover:text-blue-500 pb-4 ${pathname === "/clientes" ? "border-b-4" : ""}`}
				>
					Todos os Clientes
				</Link>
				<Link
					to="new"
					className={`text-white hover:text-blue-500 pb-4 ${pathname === "/clientes/new" ? "border-b-4" : ""}`}
				>
					Novo Cliente
				</Link>
			</section>
			<section className="h-4/6">
				<Outlet />
			</section>
		</>
	);
}
