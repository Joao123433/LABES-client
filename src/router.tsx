import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/RootLayout";
import { Clientes } from "./pages/clientes/Clientes";
import { NewCliente } from "./pages/clientes/NewClient/Index";
import { Home } from "./pages/Home";
import { RootClientes } from "./components/RootClientes";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "clientes",
				element: <RootClientes />,
				children: [
					{
						index: true,
						element: <Clientes />,
					},
					{
						path: "new",
						element: <NewCliente />,
					},
					// {
					//   path: ":clienteId",
					//   element: <ShowCliente />
					// },
					// {
					//   path: ":clienteId/update",
					//   element: <UpdateCliente />
					// }
				],
			},
		],
	},
]);
