import type { ClientesFetch } from "./ClientesFetch";
import type { ClientesInput } from "./ClientesOmit";

export interface ClintesDataContext {
	clientes: ClientesFetch[];
	createCliente: (cliente: ClientesInput) => Promise<void>;
	updateCliente: (cliente: ClientesFetch) => Promise<void>;
	deleteCliente: (id: number) => Promise<void>;
}
