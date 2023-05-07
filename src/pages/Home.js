import React, { useEffect, useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import {
	KEY_ACCESS_TOKEN,
	getItem,
	removeItem,
	setItem,
} from "../utils/localStorageManager";
import { useParams } from "react-router-dom";

function Home() {
	const params = useParams();
	const [data, setData] = useState(null);
	const email = params.email;

	useEffect(() => {
		async function fetchData() {
			const access_token = getItem(KEY_ACCESS_TOKEN);
			try {
				const response = await axiosClient.get(`/post/all/${email}`);
				// console.log("At home", response);
				setData(response.data);
				//  console.log("data",data.posts[0])
			} catch (error) {
				console.error(error);
			}
		}
		fetchData();
	}, []);

	if (!data) {
		return <div>Loading data...</div>;
	}

	return (
		<div className='text-justify flex flex-col items-center'>
			<h1 className='font-extrabold'>User detail!</h1>
			<h1>Name = {data?.posts[0].name}</h1>
			<h1>Email = {data?.posts[0].email}</h1>
			<h1>ID = {data?.posts[0]._id}</h1>
		</div>
	);
}

export default Home;
