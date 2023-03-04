import React, { useState, useEffect } from 'react'

const UseEffect1 = () => {

    // Make sure any hooks can not be use inside a conditional statement.
    // But inside a hook you can use conditional statement.

    const [count, setCount] = useState(0);

    // useEffect is run after the all components run
    // It runs only one time
    // It runs on every time when reload the page
    // You can use multiple useEffect in your code
    useEffect(() => {
        if (count > 0) {
            // Change the title based on the count value
            document.title = `Unread message (${count})`
        }
        else {
            // If you didn't click on button then you can't see count
            document.title = `Unread message`
        }
        // If you pass the empty dependency array then useEffect runs only once when reload the page
        // But if you pass the dependency array with variable then useEffect runs everytime when variable value will be change
    }, [count]);

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