import React, { useState, useEffect } from 'react'

const UseEffectApi = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        // Fetch API
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        setUsers(await response.json());
    }

    //Dependency must when use map function
    useEffect(() => {
        getUsers();
    }, [])

    return (
        <>
            <h2>List of GitHub Users</h2>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {
                        users.map((curElm) => {
                            return (
                                <div className="col-10 col-md-4 mt-5" key={curElm.id}>
                                    <div className="card p-2">
                                        <div className="d-flex align-items center">
                                            <div className="image">
                                                <img src="" alt="" />
                                            </div>
                                            <div className="ml-3 w-100">
                                                <h4 className="mb-0 mt-0 textLeft">{curElm.name}</h4>
                                                <span className="textLeft">{curElm.email}</span>
                                                <div className="p-2 mt-2 d-flex justify-content-between rounded stats">
                                                    <div className="d-flex flex-column">
                                                        <span>City</span>
                                                        <span className='number1'>{curElm.address.city}</span>
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <span>Website</span>
                                                        <span className='number2'>{curElm.website}</span>
                                                    </div>
                                                    <div className="d-flex flex-column">
                                                        <span>Zip Code</span>
                                                        <span className='number2'>{curElm.address.zipcode}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default UseEffectApi