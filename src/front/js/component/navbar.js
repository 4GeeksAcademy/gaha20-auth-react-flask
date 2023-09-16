import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Button } from "primereact/button";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const isAuthenticated = store.userLogged;
	
	const logout = () => {
		window.localStorage.removeItem("userLogged");
	  };

	return (
		<nav className="navbar navbar-dark bg-dark">
	// 	<div className="container">
			<div className="w-100">
			<React.Fragment>
				{!isAuthenticated && (
				<>
					<Link to="/login">
					<Button className="p-button-success mx-2 gap-3">
						<span className="p-ml-2">Login</span>
					</Button>
					</Link>
					<Link to="/signup">
					<Button className="p-button-secondary">
						<span className="p-ml-2">Register</span>
					</Button>
					</Link>
				</>
				)}
				{isAuthenticated && (
				<Button
					className="p-button-danger p-mr-2"
					onClick={() => actions.logout()}
				>
					<span className="p-ml-2">Logout</span>
				</Button>
				)}
			</React.Fragment>
			</div>
		</div>
		</nav>
	);
};
