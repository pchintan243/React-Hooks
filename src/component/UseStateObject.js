import React, { useState } from 'react'

const UseStateObject = () => {

    const [myObject, setmyObject] = useState({
        myName: "Chintan", myAge: 18, myDegree: "BE"
    });

    const changeObject = () => {
        // In this way you can change the value but another value will be empty
        // setmyObject({ myName: 'chintan patel' })

        // In this way you can change the value withour effecting other value
        // Using this ...myObject you can get all the data from the useState and after changing the particular data
        setmyObject({ ...myObject, myName: 'chintan patel' })
    }
    return (
        <>
            <h1>Name: {myObject.myName} & Age: {myObject.myAge} & Degree: {myObject.myDegree}</h1>
            <button className="btn btn-danger" onClick={changeObject}>Update</button>
        </>
    )
}

export default UseStateObject