import type { ClientesFetch } from "./ClientesFetch";

export type ClientesInput = Omit<ClientesFetch, "codigo">;
