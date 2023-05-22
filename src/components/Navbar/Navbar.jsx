import React from "react"
import AdminNavbar from "./AdminNavbar"
import ObserverNavbar from "./ObserverNavbar"

const Navbar = ({ userRole }) => {
	// Render the appropriate navbar component based on the user role
	const renderNavbarByRole = () => {
		if (userRole === "admin") {
			return <AdminNavbar />
		} else if (userRole === "observer") {
			return <ObserverNavbar />
		}
	}

	return <div>{renderNavbarByRole()}</div>
}

export default Navbar
