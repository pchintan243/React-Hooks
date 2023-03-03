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

    const removeElement = (id) => {
        const myNewArray = myArray.filter((curElm) => {
            return curElm.id !== id;
        })

        setmyArray(myNewArray);
    }

    return (
        <>
            {
                myBioData.map((curElm) => {
                    return (
                        <h1 key={curElm.id}>Name: {curElm.name} & Age: {curElm.age}
                            {/* For getting the id of an element we can call a function in button & after that we can define the function at top */}
                            <button className='btn btn-danger' onClick={() => removeElement(curElm.id)}>Remove</button>
                        </h1>
                    )
                })
            }
            <button className='btn btn-danger' onClick={clearValue}>Clear</button>
        </>
    )
}

export default UseStateArray