import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { ItemProvider } from "./context/ClientesContext";

function App() {
	return (
		<ItemProvider >
			<RouterProvider router={router} />
		</ItemProvider>
	)
	
}

export default App;
