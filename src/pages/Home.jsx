import React, { useEffect, useState } from "react"

import AddIcon from "@mui/icons-material/Add"

import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import { logout, reset } from "../features/auth/authSlice"

import Spinner from "../components/Spinner"
import ShoppingCart from "../components/Counter"

function Home() {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const { user, isLoading } = useSelector((state) => state.auth)

	const onLogout = () => {
		dispatch(logout())
		dispatch(reset())
		navigate("/login")
	}

	if (isLoading) {
		return <Spinner />
	} else {
		return (
			<div className='w-screen h-screen flex justify-center items-start'>
				<div className='w-4/5 '>
					<h1 className='font-bold text-3xl text-center m-4'>
						Hoşgeldin {user?.name}
					</h1>
					<hr className='border-2 border-black' />

					<ShoppingCart />

					<div className='flex justify-center items-center m-2 text-center'>
						<div className='text-center flex'>
							<button
								onClick={() => navigate("/login")}
								className='flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
								<h4 className='p-2 '> Giriş Yap</h4>
							</button>
							<button
								onClick={onLogout}
								className='flex justify-between items-center px-2 m-2 text-white bg-blue-600 rounded-md transition ease-in-out delay-150 hover:scale-110 duration-300 cursor-pointer'>
								<h4 className='p-2 '> Çıkış Yap</h4>
							</button>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home
