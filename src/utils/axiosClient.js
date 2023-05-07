import axios from "axios";
import { KEY_ACCESS_TOKEN, getItem } from "./localStorageManager";

const url = "https://assignment2-hr6p.onrender.com";
export const axiosClient = axios.create({
	baseURL: url,
	withCredentials: true,
});

axiosClient.interceptors.request.use(
	//request inteceptor
	(request) => {
		const access_token = getItem(KEY_ACCESS_TOKEN);
		request.headers["Authorization"] = `Bearer ${access_token}`;
		return request;
	},
);
