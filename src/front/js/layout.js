import React, { useContext } from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { BackendURL } from "./component/backendURL";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import { Signup } from "./pages/signup";
import { Login } from "./pages/login";
import { Private } from "./pages/private";
import { ProtectedRoute } from "./component/protectedRoute";
import { AccessDenied } from "./pages/accessDenied";
import injectContext, { Context } from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const { store, actions } = useContext(Context);
    const { userLogged } = store;
    const basename = process.env.BASENAME || "";

    if(!process.env.BACKEND_URL || process.env.BACKEND_URL == "") return <BackendURL/ >;

    function LayoutNavar() {
        return (
          <div style={{ minHeight: "93vh" }}>
            <Navbar />
            <Outlet />
          </div>
        );
      }

    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Routes>
                        <Route path="/" element={<LayoutNavar />}>
                            <Route element={<Home />} path="/" />
                            <Route element={<Demo />} path="/demo" />
                            <Route element={<Single />} path="/single/:theid" />
                            <Route element={<Signup />} path="/signup" />
                            <Route element={<Login />} path="/login" />
                            <Route path="/private" 
                                element={
                                    <ProtectedRoute redirectTo="/accessdenied" isAllowed={!!userLogged}>
                                        <Private />
                                    </ProtectedRoute>
                                }
                            />
                            <Route element={<AccessDenied />} path="/accessdenied" />
                            <Route element={<h1>Not found!</h1>} />
                        </Route>
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
