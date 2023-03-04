import React, { useState, useEffect } from 'react'

const UseEffect2 = () => {
    // Measure our screen width and show the width in our web page
    const [widthCount, setWidthCount] = useState(window.screen.width);

    const actualWidth = () => {
        setWidthCount(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", actualWidth);

        return () => {
            // cleanup function
            // Which cleans our memory
            // When our useEffect above part is executed after that this part will run
            // It will remove the space so improve our memory storage
            window.removeEventListener("resize", actualWidth);
        }
    })

    return (
        <>
            <p>The actual size of the window is:</p>
            <h1>{widthCount}</h1>
        </>
    )
}

export default UseEffect2