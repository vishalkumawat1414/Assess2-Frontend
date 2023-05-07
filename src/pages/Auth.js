import React from "react";
// import axios from 'axios'
import { useState } from "react";
import { axiosClient } from "../utils/axiosClient";
import { useNavigate } from "react-router-dom";

import { KEY_ACCESS_TOKEN, setItem } from "../utils/localStorageManager";

function Auth() {
	const navigate = useNavigate();

	//for signup
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [resumeFile, setResumeFile] = useState(null);

	//for login
	const [Lemail, setLEmail] = useState("");
	const [Lpassword, setLPassword] = useState("");

	const handlesubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", name);
		formData.append("email", email);
		formData.append("password", password);
		formData.append("resumeFile", resumeFile);

		try {
			const res = await axiosClient.post("/signup", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
			console.log(res.data);
		} catch (err) {
			console.error(err);
		}

		navigate("/success");
	};

	const handlelogin = async (e) => {
		e.preventDefault();
		try {
			const result = await axiosClient.post("/login", {
				Lemail,
				Lpassword,
			});
            // const {_id} = result._id;
			// console.log("user id",_id)
			//  console.log("tt",result.data.accessToken)
			setItem(KEY_ACCESS_TOKEN, result.data.accessToken);

			navigate(`/userData/${Lemail}`);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='body m-0 p-0 flex justify-center items-center min-h-[100vh] bg-gradient-to-b from-gray-200 via-gray-500 to-black'>
			<div class='main relative overflow-hidden w-[350px] h-[500px] bg-gray-500  rounded-lg shadow-2xl shadow-black'>
				<input
					className='hidden'
					type='checkbox'
					id='chk'
					aria-hidden='true'
				/>

				<div className='register  overflow-hidden w-full h-4/5 '>
					<form onSubmit={handlesubmit}>
						<label
							className='text-white  text-3xl justify-center flex m-[30px] font-bold cursor-pointer ease-in-out duration-500 '
							aria-hidden='true'>
							Register
						</label>
						<input
							className='p-5 w-3/5 h-[20px] bg-slate-200 justify-center flex my-[20px] mx-auto  border-none outline-none rounded-md ease-in duration-200 cursor-pointer hover:bg-violet-300 '
							type='text'
							name='txt'
							value={name}
							placeholder='User name'
							required=''
							onChange={(e) => setName(e.target.value)}
						/>
						<input
							className=' p-5 w-3/5 h-[20px] bg-slate-200 justify-center flex my-[20px] mx-auto border-none outline-none rounded-md ease-in duration-200 cursor-pointer hover:bg-violet-300       '
							type='email'
							name='email'
							value={email}
							placeholder='Email'
							required=''
							onChange={(e) => setEmail(e.target.value)}
						/>
						<input
							className='p-5 w-3/5 h-[20px] bg-slate-200 justify-center flex my-[20px] mx-auto  border-none outline-none rounded-md ease-in duration-200 cursor-pointer hover:bg-violet-300         '
							type='password'
							name='pswd'
							value={password}
							placeholder='Password'
							required=''
							onChange={(e) => setPassword(e.target.value)}
						/>
						<input
							className='cursor-pointer  flex justify-center text-justify mx-20 my-[20px]   border-none outline-none '
							type='file'
							name='file'
							accept='.pdf,.doc,.docx'
							required=''
							onChange={(e) => setResumeFile(e.target.files[0])}
						/>
						<button
							type='submit'
							className='w-3/5 h-[40px] my-[10px] mx-auto justify-center block bg-violet-400 text-base font-bold mt-[20px] outline-none border-none rounded-md ease-in duration-200 cursor-pointer hover:bg-violet-500          '>
							Sign up
						</button>
					</form>
				</div>

				<div className='login absolute h-[450px] w-[350px]  hover:-translate-y-2/3 ease-in duration-700 bg-slate-300 rounded-t-full              '>
					<form onSubmit={handlelogin}>
						<label
							className='text-blue-700 text-xl  justify-center flex m-[40px] mb-10 font-bold cursor-pointer  '
							for='chk'
							aria-hidden='true'>
							Login
						</label>
						<input
							className='p-5 w-3/5 h-[20px] bg-slate-200 justify-center flex my-[20px] mx-auto  border-none outline-none rounded-md ease-in duration-200 cursor-pointer hover:bg-violet-500  '
							type='email'
							name='Lemail'
							value={Lemail}
							placeholder='Email'
							required=''
							onChange={(e) => setLEmail(e.target.value)}
						/>
						<input
							className='p-5 w-3/5 h-[20px] bg-slate-200 justify-center flex my-[20px] mx-auto  border-none outline-none rounded-md ease-in duration-200 cursor-pointer hover:bg-violet-500  '
							type='password'
							name='Lpassword'
							value={Lpassword}
							placeholder='Password'
							required=''
							onChange={(e) => setLPassword(e.target.value)}
						/>
						<button
							type='submit'
							className='w-3/5 h-[40px]  mx-auto justify-center block bg-violet-400 text-base font-bold mt-[60px] outline-none border-none rounded-md ease-in duration-200 cursor-pointer hover:bg-violet-500 '>
							Login
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Auth;
