import React from 'react'
import NavBar from "./NavBar"
import Main from "./Main"
import Introduction from "./Introduction"
import LiteracyRate from "./LiteracyRate"
import Enquiry from "./Enquiry"


const Home = () => {
    return (
        <>
            <NavBar />
            <Main />
            <Introduction />
            <LiteracyRate />
            <Enquiry />
        </>
    )
}

export default Home
