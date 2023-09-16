import React, { useState, useEffect, useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/signup.css";

import { Context } from "../store/appContext";

export const Private = () => {

	const { store, actions } = useContext(Context);
    
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

                    <h1>Hello, I´m a Private Page.</h1>

                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
	);
};