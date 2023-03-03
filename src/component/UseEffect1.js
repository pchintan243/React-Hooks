import React, { useState, useEffect } from 'react'

const UseEffect1 = () => {

    const [count, setCount] = useState(0);

    // useEffect is run after the all components run
    // It runs only one time
    // It runs on every time when reload the page
    useEffect(() => {
        console.log("Use effect");
        // Change the title based on the count value
        document.title = `Unread message (${count})`
    });

    console.log("Outside");

    return (
        <>
            <div className="container">
                <p>{count}</p>
                {/* When user click on the button count value will be increasing. */}
                <button className="btn btn-danger" onClick={() =>
                    setCount(count + 1)}>Click it..!!</button>
            </div>
        </>
    )
}

export default UseEffect1