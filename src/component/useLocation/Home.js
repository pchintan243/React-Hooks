import React from 'react'
import { useLocation } from "react-router-dom"

const Home = () => {
    const location = useLocation();
    return (
        <>
            <h1>{location.pathname.replace("/", "")}Home</h1>
            {
                location.pathname === "" ?
                    <p>Hello you are in about page</p> :
                    <p>Hello you are in home page</p>
            }
        </>
    )
}

export default Home