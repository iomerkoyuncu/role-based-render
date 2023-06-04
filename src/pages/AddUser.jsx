import React, { useState } from "react"
import { TextField } from "@mui/material"

import { addUser } from "../features/auth/authSlice"
import { useDispatch, useSelector } from "react-redux"

function AddUser() {
	const [formdata, setFormdata] = useState({
		user_id: "",
		name: "",
		email: "",
		password: "",
		secondary_email: "",
		gsm: "",
		firstname: "",
		lastname: "",
		locale: "",
		timezone: "",
		status: "",
	})

	const dispatch = useDispatch()
	const { user, isLoading } = useSelector((state) => state.auth)

	const handleChange = (e) => {
		setFormdata({ ...formdata, [e.target.name]: e.target.value })
	}

	return (
		<div className='flex flex-col justify-center items-center'>
			<h1 className='font-bold text-[24px] m-2 p-2'>Add New User</h1>
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
						variant='outlined'
						required
					/>
					<TextField
						onChange={handleChange}
						sx={{
							width: "200px",
							margin: "5px",
						}}
						id='name'
						name='name'
						label='name'
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
						variant='outlined'
						required
					/>
				</div>
			</div>
			<div>
				<button
					onClick={() => {
						console.log(formdata)
						dispatch(addUser(formdata))
					}}
					className='flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-200 cursor-pointer'>
					<h4 className='p-2'>Add User</h4>
				</button>
			</div>
		</div>
	)
}

export default AddUser
