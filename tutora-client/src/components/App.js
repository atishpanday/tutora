import './App.css';
import React, { useEffect, useState } from "react"
import Home from "./home/Home"
import Login from "./home/Login"
import Registration from "./home/Registration"
import Dashboard from "./dashboard/Dashboard"
import PostGig from "./dashboard/PostGig"
import TutorsPage from "./tutors/TutorsPage"
import SearchBar from "./home/SearchBar"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

export const LoginContext = React.createContext()

function App() {


  const [loggedIn, setLoggedIn] = useState(false)

  const authenticate = async () => {
    try {
      const res = await fetch("/auth/verify", {
        method: "POST",
        headers: {
          jwToken: localStorage.token
        }
      })
      const parsedResponse = await res.json()
      parsedResponse.status === "successful" ? setLoggedIn(true) : setLoggedIn(false)
    } catch (err) {
      console.error(err.message)
    }
  }
  useEffect(() => {
    authenticate()
  })
  return (
    <>
      <LoginContext.Provider value = {{ loggedIn, setLoggedIn }}>
        <Router>
          <Switch>
            <Route exact path = "/" render = {() => loggedIn ? <Redirect to = "/dashboard" /> : <Home />} />
            <Route exact path = "/login" render = {() => loggedIn ? <Redirect to = "/dashboard" /> : <Login />} />
            <Route exact path = "/register" render = {() => loggedIn ? <Redirect to = "/dashboard" /> : <Registration />} />
            {/* <Route exact path = "/dashboard" render = {() => loggedIn ? <Dashboard /> : <Redirect to = "/" />} /> */}
            <Route exact path = "/dashboard" render = {() => <Dashboard />} />
            <Route exact path = "/dashboard/post-gig" render = {() => <PostGig />} />
            <Route exact path = "/tutors" render = {() => <TutorsPage />} />
            <Route exact path = "/search" render = {() => <SearchBar />} />
          </Switch>
        </Router>
      </LoginContext.Provider >
    </>
  );
}

export default App
