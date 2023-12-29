import React from "react";
import { Route, Routes } from "react-router-dom"
import Register from "../pages/register/register"
import Update from "../pages/update/update"
import Users from "../pages/users/users"

const Router = () => {
    return(
        <Routes>
            <Route element={<Register/>} path="/register"/>
            <Route element={<Update/>} path="/update"/>
            <Route element={<Users/>} path="/"/>
        </Routes>
    )
}

export default Router
