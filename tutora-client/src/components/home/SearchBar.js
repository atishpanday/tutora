import React, { useRef } from 'react'
import "./SearchBar.css"


const SearchBar = () => {

    const searchRef = useRef()

    const setSearchRef = () => {
        getSearchResults()
    }

    const getSearchResults = async () => {
        const res = await fetch("/search-res", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                input: searchRef.current.value
            })
        })

        const results = await res.json()

        const newDiv = document.createElement("div")
        
        while(document.querySelector(".search-results-container").firstChild){
            document.querySelector(".search-results-container").removeChild(document.querySelector(".search-results-container").firstChild)
        }
        results.forEach(result => {
            const textNode = document.createElement("div")
            textNode.innerHTML += result.name
            textNode.style.padding = "5px"
            textNode.style.cursor = "pointer"
            textNode.addEventListener("mouseover", () => {
                textNode.style.background = "lightgray"
            })
            textNode.addEventListener("mouseleave", () => {
                textNode.style.background = "white"
            })
            newDiv.appendChild(textNode)
        })
        document.querySelector(".search-results-container").appendChild(newDiv)
        if(searchRef.current.value === ""){
            while(document.querySelector(".search-results-container").firstChild){
                document.querySelector(".search-results-container").removeChild(document.querySelector(".search-results-container").firstChild)
            }
        }
    }

    return (
        <div className="search-bar-container">
            <div className="search-bar">
                <input className="search" type="search" placeholder="Looking for a tutor ?" ref={searchRef} onChange={setSearchRef}></input>
            </div>
            <div className="search-btn-container">
                <button className="search-btn">
                    <svg width="22" height="22" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M15.853 16.56c-1.683 1.517-3.911 2.44-6.353 2.44-5.243 0-9.5-4.257-9.5-9.5s4.257-9.5 9.5-9.5 9.5 4.257 9.5 9.5c0 2.442-.923 4.67-2.44 6.353l7.44 7.44-.707.707-7.44-7.44zm-6.353-15.56c4.691 0 8.5 3.809 8.5 8.5s-3.809 8.5-8.5 8.5-8.5-3.809-8.5-8.5 3.809-8.5 8.5-8.5z" /></svg>
                </button>
            </div>
            <div className="search-results-container">
            </div>
        </div>
    )
}

export default SearchBar
