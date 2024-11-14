import { useContext } from "react";
import { ClientesContext } from "../context/ClientesContext";

export function UseCliente() {
	const context = useContext(ClientesContext);

	return context;
}
