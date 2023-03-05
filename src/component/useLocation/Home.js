import React from 'react'
import { useLocation } from "react-router-dom"

const Home = () => {
    const location = useLocation();
    return (
        <>
            <h1>{location.pathname.replace("/", "")}</h1>
            {
                location.pathname === "home" ?
                    <p>Hello you are in about page</p> :
                    <p>Hello you are in home page</p>
            }
        </>
    )
}

export default Home