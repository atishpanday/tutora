import React, { useContext, useState } from 'react'
import "./Dashboard.css"
import { LoginContext } from "../App"
import CourseCard from "./CourseCard"
import DashboardSearch from "./DashboardSearch"
import SideBar from "./SideBar"


const Dashboard = () => {

    const value = useContext(LoginContext)

    const [file, setFile] = useState()

    const submitImage = async (e) => {
        e.preventDefault()
        setFile(e.target.files[0])
        const formData = new FormData()
        formData.append("image", file)
        try{
            const res = await fetch("/store-image", {
            method: "POST",
            files: formData
        }) 
            const result = await res.json()
            console.log(result)
        } catch(err) {
            console.log(err.message)
        }
    }

    const [img, setImg] = useState()

    const showImg = async () => {
        const res = await fetch("/get-image")
        const result = await res.json()
        console.log(result.image)
        setImg(result.image)
    }

    const requestLogout = () => {
        value.setLoggedIn(false)
        localStorage.removeItem("token")
    }
    return (
        <div
            style = {{
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}>
            <SideBar />
            <DashboardSearch />
            <CourseCard />
            <div>Dashboard</div>
            <button onClick = {requestLogout}>Log out</button>
            <form> 
                <input type = "file" onChange = {submitImage} enctype = "multipart/form-data" name = "image"></input>
                <button type ="submit">Submit</button>
            </form>
            <button onClick = {showImg}>Show image</button>
            {img ? <img src = {img} alt = "img here"></img> : <div>no images</div>}
        </div>
    )
}

export default Dashboard
