import React, { useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { getAllUsers } from "../features/auth/authSlice"

import { useNavigate } from "react-router-dom"

import ModeIcon from "@mui/icons-material/Mode"

import { deleteUser } from "../features/auth/authSlice"

import UpdateIcon from "@mui/icons-material/Update"
import HighlightOffIcon from "@mui/icons-material/HighlightOff"

function Users() {
	const { users, role } = useSelector((state) => state.auth)

	const dispatch = useDispatch()
	const navigate = useNavigate()

	return (
		<>
			<div className='flex flex-col justify-center items-center'>
				<div className='flex'>
					{role && role.permissions.includes("USER_ACCOUNT_READ_PAGE") ? (
						<button
							className='flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'
							onClick={() => {
								dispatch(getAllUsers())
							}}>
							<h4 className='p-2'>Fetch Users</h4>
						</button>
					) : null}

					{role && role.permissions.includes("USER_ACCOUNT_CREATE_PAGE") ? (
						<button
							onClick={() => {
								navigate("/add")
							}}
							className='flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
							<h4 className='p-2'>Add User</h4>
						</button>
					) : null}
				</div>
				<div>
					<table>
						<thead>
							<tr className='border-2'>
								<th>Id</th>
								<th>Email</th>
								<th>Secondary Email</th>
								<th>GSM</th>
								<th>Firstname</th>
								<th>Lastname</th>
								<th>Locale</th>
								<th>Timezone</th>
								<th>Status</th>
								<th>Operations</th>
							</tr>
						</thead>
						<tbody>
							{users
								? users.map((user) => {
										return (
											<tr>
												<td className='border-2'>{user.user_id}</td>
												<td className='border-2'>{user.email}</td>
												<td className='border-2'>{user.secondary_email}</td>
												<td className='border-2'>{user.gsm}</td>
												<td className='border-2'>{user.firstname}</td>
												<td className='border-2'>{user.lastname}</td>
												<td className='border-2'>{user.locale}</td>
												<td className='border-2'>{user.timezone}</td>
												<td className='border-2'>{user.status}</td>

												<td className='flex justify-evenly'>
													{role &&
													role.permissions.includes(
														"USER_ACCOUNT_UPDATE_PAGE"
													) ? (
														<button
															onClick={() => {
																navigate(`/update/${user.user_id}`)
															}}>
															<ModeIcon />
														</button>
													) : null}

													{role &&
													role.permissions.includes(
														"USER_ACCOUNT_UPDATE_PAGE"
													) ? (
														<button
															onClick={() => {
																dispatch(deleteUser(user.user_id))
															}}>
															<HighlightOffIcon />
														</button>
													) : null}
												</td>
											</tr>
										)
								  })
								: null}
						</tbody>
					</table>
				</div>
			</div>
		</>
	)
}

export default Users
