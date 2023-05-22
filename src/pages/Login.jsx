import React, { useState, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { login, reset } from "../features/auth/authSlice"
import { toast } from "react-toastify"

import Spinner from "../components/Spinner"

import { TextField } from "@mui/material"
import { useNavigate } from "react-router-dom"

function Login() {
	const [formdata, setFormdata] = useState({
		email: "",
		password: "",
	})

	const { email, password } = formdata

	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { user, isLoading, isError, isSuccess, message } = useSelector(
		(state) => state.auth
	)

	useEffect(() => {
		if (isError) {
			toast.error(message)
		}

		// Redirect when logged in
		if (isSuccess || user) {
			navigate("/")
		}

		dispatch(reset())
	}, [isError, isSuccess, user, message, dispatch, navigate])

	const handleChange = (e) => {
		setFormdata({ ...formdata, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const userData = {
			email,
			password,
		}

		dispatch(login(userData))
	}

	if (isLoading) {
		return <Spinner />
	} else {
		return (
			<div className='w-screen h flex flex-col justify-center items-center'>
				<div className='w-96 h-96 bg-white rounded-md shadow-lg m-4 flex flex-col justify-center items-center mb-10'>
					<h1 className='font-bold text-3xl text-center m-2 p-5'>
						Hesabına Giriş Yap
					</h1>
					<div className='h-48 flex flex-col justify-evenly p-2'>
						<form onSubmit={handleSubmit} className='text-center'>
							<TextField
								onChange={handleChange}
								name='email'
								value={email}
								sx={{
									width: "300px",
									margin: "5px",
								}}
								id='email'
								type={"email"}
								label='Email'
								variant='outlined'
								required
							/>

							<TextField
								onChange={handleChange}
								name='password'
								value={password}
								sx={{
									width: "300px",
									margin: "5px",
								}}
								id='password'
								type={"password"}
								label='Password'
								variant='outlined'
								required
							/>
							<div className='w-full p-2 flex justify-end items-center'>
								<button
									type='submit'
									className='flex justify-between items-center px-2 mx-2 text-white bg-blue-400 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
									<h4 className='p-2 '>Giriş Yap</h4>
								</button>
								<button
									onClick={() => {
										navigate("/register")
									}}
									className='flex justify-between items-center m-2 px-2 mx-2 text-white bg-black rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
									<h4 className='p-2 '>Hesabın Yok mu? Kayıt Ol</h4>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Login
