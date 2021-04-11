import React, { useContext } from 'react'
import "./Dashboard.css"
import { LoginContext } from "../App"
import CourseCard from "./CourseCard"
import DashboardSearch from "./DashboardSearch"
import SideBar from "./SideBar"


const Dashboard = () => {

    const value = useContext(LoginContext)

    const requestLogout = () => {
        value.setLoggedIn(false)
        localStorage.removeItem("token")
    }
    return (
        <>
        <SideBar />
        <DashboardSearch />
        <CourseCard />
        <div>Dashboard</div>
        <button onClick = {requestLogout}>Log out</button>
        </>
    )
}

export default Dashboard
