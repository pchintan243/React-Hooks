import React, { useReducer } from 'react'

const initialState = 5;

const reducer = (state, action) => {
    // To see which action to be performed
    console.log(action);
    // Increment the value
    if (action.type === "INCREMENT") {
        return state + 1;
    }
    // Decrement the value
    if (action.type === "DECREMENT") {
        return state - 1;
    }
    return state;
}

const UseReducer = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <div>
                <p>{state}</p>
                <div className="container">
                    <button className="btn btn-danger m-2" onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
                    <button className="btn btn-danger m-2" onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
                </div>
            </div>
        </>
    )
}

export default UseReducer