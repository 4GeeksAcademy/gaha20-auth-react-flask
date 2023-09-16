import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/signup.css";

import { Context } from "../store/appContext";

export const Login = () => {

	const { store, actions } = useContext(Context);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const toast = useRef(null);
    const navigate = useNavigate();


    const handleLogin = async () => {
        try {
        const loginVerification = await actions.login(email, password);
        console.log(loginVerification)
        if (loginVerification.token) {
            navigate("/private");
        } else {
            toast.current.show({
            severity: "error",
            summary: "Error",
            detail: loginVerification.message,
            life: 3000,
            });
        }
        } catch (error) {
        console.log("error del catch:",error);
        }
    };

	return (
        <section className="vh-100 bg-image"
        style={{backgroundImage: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp"}}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{borderRadius: "15px"}}>
                    <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-3">log in</h2>

                    <form>

                        <div className="form-outline mb-2">
                        <input 
                        type="email" 
                        id="formEmail" 
                        className="form-control form-control-lg" 
                        value={email}
                        onChange={(data) => setEmail(data.target.value)}
                        />
                        <label className="form-label" htmlFor="formEmail">Your Email</label>
                        </div>

                        <div className="form-outline mb-2">
                        <input 
                        type="password" 
                        id="formPassword" 
                        className="form-control form-control-lg" 
                        value={password}
                        onChange={(data) => setPassword(data.target.value)}
                        />
                        <label className="form-label" htmlFor="formPassword">Password</label>
                        </div>

                        <div className="d-flex justify-content-center">
                        <button type="button"
                            className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                            onClick={() => handleLogin()}
                            >Register</button>
                        </div>

                    </form>

                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
	);
};