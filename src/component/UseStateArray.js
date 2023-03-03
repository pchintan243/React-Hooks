import React, { useState } from 'react'

const UseStateArray = () => {
    const myBioData = [
        {
            id: 1, name: "Chintan", age: 12
        },
        {
            id: 2, name: "patel", age: 22
        }
    ]

    const [myArray, setmyArray] = useState(myBioData);

    const clearValue = () => {
        setmyArray([]);
    }

    return (
        <>
            {
                myBioData.map((curElm) => {
                    return <h1 key={curElm.id}>Name: {curElm.name} & Age: {curElm.age}</h1>
                })
            }
            <button className='btn btn-danger' onClick={clearValue}>Clear</button>
        </>
    )
}

export default UseStateArray