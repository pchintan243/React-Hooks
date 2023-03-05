import React from 'react'
import { useLocation } from "react-router-dom"

const About = () => {
    // To get the location or path
    const location = useLocation();
    return (
        <>
            <h1>{location.pathname.replace("/", "")}</h1>
            {
                location.pathname === "about" ?
                    <p>Hello you are in home page</p> :
                    <p>Hello you are in about page</p>
            }
        </>
    )
}

export default About