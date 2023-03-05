import React, { useState, useEffect } from 'react'
import Loading from './github/Loading';

const UseEffectApi = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const getUsers = async () => {
        try {
            // Fetch API
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            // If data is loaded succesfully then we set the value as a 
            setLoading(false);
            setUsers(await response.json());

        } catch (error) {
            // If error is occured then setLoading will be false because we want to see the error
            setLoading(false);
            console.log("Error" + error);
        }
    }

    // Dependency must when use map function
    useEffect(() => {
        getUsers();
    }, []);

    // If data is loading then we show the loading file
    if (loading) {
        return <Loading />
    }

    return (
        <>
            <h1 className='text-center mt-3'>List of GitHub Users</h1>
            <div className="container-fluid mt-5">
                <div className="row text-center">
                    {
                        users.map((curElm) => {
                            return (
                                <div className="col-10 col-md-4 mt-5" key={curElm.id}>
                                    <div className="card p-2">
                                        <div className="d-flex align-items-center">
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