import React, { useContext } from 'react';
import { BioData } from './Component1';

const Component3 = () => {
    const name = useContext(BioData)
    return (
        <>
            <div>
                <span>name is -- </span> {name}
            </div>
        </>
    )
}

export default Component3