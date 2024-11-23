import axios from "axios";

export const api = axios.create({
	// baseURL: "http://localhost:8091/clientes",
	baseURL: "http://localhost:3000/clientes",
});
