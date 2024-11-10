import axios from "axios";

export const apiCep = axios.create({
	baseURL: "https://opencep.com/v1/",
});
