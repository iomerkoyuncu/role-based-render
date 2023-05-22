import React, { useState } from "react"

import { useSelector, useDispatch } from "react-redux"

function Counter() {
	const [count, setCount] = useState(0)

	const dispatch = useDispatch()
	const { user, isLoading } = useSelector((state) => state.auth)

	return (
		<div className='flex justify-center items-center'>
			<h1>Counter</h1>
			<h2 className='border-2 border-black p-3 m-3 rounded-xl'>{count}</h2>
			<button
				className='border-2 border-black p-3 m-3 rounded-xl hover:bg-blue-200'
				onClick={() => setCount(count + 1)}>
				Increment
			</button>
			<button
				className='border-2 border-black p-3 m-3 rounded-xl hover:bg-red-200'
				onClick={() => setCount(count - 1)}>
				Decrement
			</button>
			{user?.role === "admin" ? (
				<button className='border-2 border-black p-3 m-3 rounded-xl hover:bg-green-200'>
					Admin Button
				</button>
			) : (
				<button className='border-2 border-black p-3 m-3 rounded-xl hover:bg-yellow-200'>
					Observer Button
				</button>
			)}
		</div>
	)
}

export default Counter
