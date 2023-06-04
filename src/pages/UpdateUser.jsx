import React, { useState } from "react"
import { TextField } from "@mui/material"

import { updateUser } from "../features/auth/authSlice"
import { useNavigate, useParams } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"

function UpdateUser() {
	const { users } = useSelector((state) => state.auth)
	const navigate = useNavigate()

	const params = useParams()

	const existingUser = users?.find((user) => user.user_id === params.id)

	console.log(users)
	console.log(existingUser)

	const {
		user_id,
		name,
		email,
		password,
		secondary_email,
		gsm,
		firstname,
		lastname,
		locale,
		timezone,
		status,
	} = existingUser

	const [formdata, setFormdata] = useState({
		user_id: user_id,
		name: name,
		email: email,
		password: password,
		secondary_email: secondary_email,
		gsm: gsm,
		firstname: firstname,
		lastname: lastname,
		locale: locale,
		timezone: timezone,
		status: status,
	})

	const dispatch = useDispatch()

	const handleChange = (e) => {
		setFormdata({ ...formdata, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(
			updateUser({
				user_id: formdata.user_id,
				email: formdata.email,
				password: formdata.password,
				secondary_email: formdata.secondary_email,
				gsm: formdata.gsm,
				firstname: formdata.firstname,
				lastname: formdata.lastname,
				locale: formdata.locale,
				timezone: formdata.timezone,
				status: formdata.status,
			})
		)
		navigate("/")
	}

	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='font-bold text-[24px] m-2 p-2'>Update User</h1>
			<div className='text-center '>
				<div className='w-[600px] flex flex-wrap justify-center items-center'>
					<TextField
						onChange={handleChange}
						sx={{
							width: "200px",
							margin: "5px",
						}}
						id='user_id'
						name='user_id'
						label='user_id'
						value={formdata.user_id}
						variant='outlined'
						required
					/>

					<TextField
						onChange={handleChange}
						sx={{
							width: "200px",
							margin: "5px",
						}}
						id='email'
						name='email'
						label='email'
						value={formdata.email}
						variant='outlined'
						required
					/>
					<TextField
						onChange={handleChange}
						sx={{
							width: "200px",
							margin: "5px",
						}}
						id='password'
						name='password'
						label='password'
						value={formdata.password}
						variant='outlined'
						required
					/>
					<TextField
						onChange={handleChange}
						sx={{
							width: "200px",
							margin: "5px",
						}}
						id='secondary_email'
						name='secondary_email'
						label='secondary_email'
						value={formdata.secondary_email}
						variant='outlined'
						required
					/>
					<TextField
						onChange={handleChange}
						sx={{
							width: "200px",
							margin: "5px",
						}}
						id='gsm'
						name='gsm'
						label='gsm'
						value={formdata.gsm}
						variant='outlined'
						required
					/>
					<TextField
						onChange={handleChange}
						sx={{
							width: "200px",
							margin: "5px",
						}}
						id='firstname'
						name='firstname'
						label='firstname'
						value={formdata.firstname}
						variant='outlined'
						required
					/>
					<TextField
						onChange={handleChange}
						sx={{
							width: "200px",
							margin: "5px",
						}}
						id='lastname'
						name='lastname'
						label='lastname'
						value={formdata.lastname}
						variant='outlined'
						required
					/>
					<TextField
						onChange={handleChange}
						sx={{
							width: "200px",
							margin: "5px",
						}}
						id='locale'
						name='locale'
						label='locale'
						value={formdata.locale}
						variant='outlined'
						required
					/>
					<TextField
						onChange={handleChange}
						sx={{
							width: "200px",
							margin: "5px",
						}}
						id='timezone'
						name='timezone'
						label='timezone'
						value={formdata.timezone}
						variant='outlined'
						required
					/>
					<TextField
						onChange={handleChange}
						sx={{
							width: "200px",
							margin: "5px",
						}}
						id='status'
						name='status'
						label='status'
						value={formdata.status}
						variant='outlined'
						required
					/>
				</div>
			</div>
			<div>
				<button
					onClick={handleSubmit}
					className='flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-200 cursor-pointer'>
					<h4 className='p-2'>Update User</h4>
				</button>
			</div>
		</div>
	)
}

export default UpdateUser
