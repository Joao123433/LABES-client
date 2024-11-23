import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/RootLayout";
import { Clientes } from "./pages/clientes/Clientes";
import { NewCliente } from "./pages/clientes/NewClient/Index";
import { Home } from "./pages/Home";
import { RootClientes } from "./components/RootClientes";
import ShowClient from "./pages/clientes/ShowClient";
import UpdateClient from "./pages/clientes/UpdateClient";

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
					{
					  path: ":codigo",
					  element: <ShowClient />
					},
					{
					  path: "atualizar/:codigo",
					  element: <UpdateClient />
					}
				],
			},
		],
		// path: "/",
		// element: <RootLayout />,
		// children: [
		// 	{
		// 		index: true,
		// 		element: <Home />,
		// 	},
		// 	{
		// 		path: "clientes",
		// 		element: <RootClientes />,
		// 		children: [
		// 			{
		// 				index: true,
		// 				element: <Clientes />,
		// 			},
		// 			{
		// 				path: "new",
		// 				element: <NewCliente />,
		// 			},
		// 			// {
		// 			//   path: ":clienteId",
		// 			//   element: <ShowCliente />
		// 			// },
		// 			// {
		// 			//   path: ":clienteId/update",
		// 			//   element: <UpdateCliente />
		// 			// }
		// 		],
		// 	},
		// ],
	},
]);
