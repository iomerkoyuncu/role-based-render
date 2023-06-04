import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import authService from "./authService"

// Get user from local storage
const user = JSON.parse(localStorage.getItem("user"))

// Get user role from local storage
const userRole = JSON.parse(localStorage.getItem("role"))

const initialState = {
	user: user ? user : null,
	users: null,
	role: userRole ? userRole : null,
	userState: null,
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: "",
}

// Register a new user
export const register = createAsyncThunk(
	"auth/register",
	async (user, thunkAPI) => {
		try {
			return await authService.register(user)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.string()

			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
	try {
		return await authService.login(user)
	} catch (error) {
		const message =
			(error.response && error.response.data && error.response.data.message) ||
			error.message ||
			error.string()

		return thunkAPI.rejectWithValue(message)
	}
})

// Logout user
export const logout = createAsyncThunk("auth/logout", async () => {
	await authService.logout()
})

// Get all users
export const getAllUsers = createAsyncThunk(
	"auth/getAllUsers",
	async (user, thunkAPI) => {
		try {
			return await authService.getAllUsers(user)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.string()

			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Add user
export const addUser = createAsyncThunk(
	"auth/addUser",
	async (user, thunkAPI) => {
		try {
			return await authService.addUser(user)
		} catch (error) {
			const message =

				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.string()

			return thunkAPI.rejectWithValue(message)
		}
	}
)

// Update user
export const updateUser = createAsyncThunk(
	"auth/updateUser",
	async (user, thunkAPI) => {
		try {
			return await authService.updateUser(user.user_id, user)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.string()

			return thunkAPI.rejectWithValue(message)
		}
	}
)


// Delete user
export const deleteUser = createAsyncThunk(
	"auth/deleteUser",
	async (id, thunkAPI) => {
		try {
			return await authService.deleteUser(id)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.string()

			return thunkAPI.rejectWithValue(message)
		}
	}
)

// User role
export const getUserRole = createAsyncThunk(
	"auth/userRole",
	async (id, thunkAPI) => {
		try {
			return await authService.userRole(id)
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.string()

			return thunkAPI.rejectWithValue(message)
		}
	}
)


export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false
			state.isError = false
			state.isSuccess = false
			state.message = ""
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(register.pending, (state) => {
				state.isLoading = true
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.user = action.payload
			})
			.addCase(register.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.user = null
			})
			.addCase(login.pending, (state) => {
				state.isLoading = true
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.user = action.payload
			})
			.addCase(login.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.user = null
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null
			})
			.addCase(getAllUsers.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getAllUsers.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.users = action.payload
			})
			.addCase(getAllUsers.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.users = null
			})
			.addCase(addUser.pending, (state) => {
				state.isLoading = true
			})
			.addCase(addUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.userState = action.payload
			})
			.addCase(addUser.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.userState = null
			})
			.addCase(deleteUser.pending, (state) => {
				state.isLoading = true
			})
			.addCase(deleteUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.userState = action.payload
			})
			.addCase(deleteUser.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.userState = null
			})
			.addCase(getUserRole.pending, (state) => {
				state.isLoading = true
			})
			.addCase(getUserRole.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.role = action.payload
			})
			.addCase(getUserRole.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.role = null
			})
			.addCase(updateUser.pending, (state) => {
				state.isLoading = true
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				state.isLoading = false
				state.isSuccess = true
				state.userState = action.payload
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.isLoading = false
				state.isError = true
				state.message = action.payload
				state.userState = null
			})
	},
})

export const { reset } = authSlice.actions
export default authSlice.reducer
