import React from "react";
import { Route, Routes } from "react-router-dom"
import Users from "../pages/users/users"

const Router = () => {
    return(
        <Routes>
            <Route element={<Users/>} path="/"/>
        </Routes>
    )
}

export default Router
