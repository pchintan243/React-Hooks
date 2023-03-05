import React, { createContext } from 'react'
import Component2 from './Component2';

// If we want to pass some information to another component then we are using props.
// If 3 components are there and we want to pass information to first component to third component then we want to transfer the value to second component after send it to third component.
// If number of components are there so it will be very complex for us.
// So we are using useContext hook instead of props.
// In context api producer and consumer are there.
// Producer is produce the value means pass the value.
// Consumer is get the value from the producer. means use the value.
// In our case component1 is producer & component3 is consumer.

const BioData = createContext();

const Component1 = () => {
    return (
        <>
            <BioData.Provider value={"Chintan patel"}>
                com1
                <Component2 />
            </BioData.Provider>
        </>
    )
}

export default Component1;
export { BioData };