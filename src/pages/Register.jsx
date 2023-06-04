import React, { useState, useEffect } from "react"

import { TextField } from "@mui/material"
import { Link, useNavigate } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { register, reset } from "../features/auth/authSlice"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"

function Register() {
	const [formdata, setFormdata] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	})

	const [matchError, setMatchError] = useState(false)
	const [matchHelper, setmatchHelper] = useState("")

	const { name, email, password, password2, role } = formdata

	const navigate = useNavigate()
	const dispatch = useDispatch()

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

		setMatchError(password === password2 ? false : true)
		setmatchHelper(password === password2 ? "" : "Şifreler uyuşmuyor.")

		if (password === password2) {
			const userData = {
				name,
				email,
				password,
				role,
			}

			dispatch(register(userData))
		}
	}

	if (isLoading) {
		return <Spinner />
	} else {
		return (
			<div className='w-screen flex flex-col justify-center items-center'>
				<div className='w-[500px]  bg-white rounded-md m-4 shadow-lg flex flex-col justify-center items-center mb-10'>
					<div className='w-full p-5 '>
						<h1 className='font-bold text-3xl text-center '>Hesap Oluştur</h1>
					</div>
					<div className='flex flex-col p-2'>
						<form onSubmit={handleSubmit} className='text-center'>
							<TextField
								onChange={handleChange}
								name='name'
								value={name}
								sx={{
									width: "300px",
									margin: "5px",
								}}
								id='name'
								label='İsminiz'
								variant='outlined'
								required
							/>
							<TextField
								onChange={handleChange}
								name='email'
								value={email}
								type={"email"}
								sx={{
									width: "300px",
									margin: "5px",
								}}
								id='email'
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
								label='Şifre'
								variant='outlined'
								required
							/>

							<TextField
								error={matchError}
								helperText={matchHelper}
								onChange={handleChange}
								name='password2'
								value={password2}
								sx={{
									width: "300px",
									margin: "5px",
								}}
								id='password2'
								type={"password"}
								label='Şifreyi yeniden girin'
								variant='outlined'
								required
							/>
							<TextField
								error={matchError}
								helperText={matchHelper}
								onChange={handleChange}
								name='role'
								value={role}
								sx={{
									width: "300px",
									margin: "5px",
								}}
								id='role'
								type={"role"}
								label='Rol girin (admin/observer)'
								variant='outlined'
								required
							/>
							<div className='w-full p-2 flex justify-evenly items-center'>
								<button
									type='submit'
									className='flex justify-between items-center px-2 mx-2 text-white bg-blue-400 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
									<h4 className='p-2 '>Kayıt Ol</h4>
								</button>
								<button
									onClick={() => {
										navigate("/login")
									}}
									className='flex justify-between items-center m-2 px-2 mx-2 text-white bg-black rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
									<h4 className='p-2 '>Zaten Hesabın var mı?, Giriş Yap</h4>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

export default Register
