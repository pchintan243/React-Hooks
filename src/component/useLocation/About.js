import React from 'react'
import { useLocation, useNavigate } from "react-router-dom"

const About = () => {
    // To get the location or path
    const location = useLocation();

    const navigate = useNavigate();

    return (
        <>
            <h1>{location.pathname.replace("/", "")}</h1>
            {
                location.pathname === "about" ?
                    <p>Hello you are in home page</p> :
                    <p>Hello you are in about page</p>
            }
            {/* It will use to go back the page */}
            <button className="btn btn-danger" onClick={() => navigate(-1)}>Go back</button>
        </>
    )
}

export default About