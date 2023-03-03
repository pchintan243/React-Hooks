import React, { useState } from 'react'

const ShortCircuitEval = () => {
    const [demo, setDemo] = useState("dfsfn")
    return (
        <>
            <div>
                {/* In or opearator if first value is there then it prints the first value */}
                <h1 style={{ 'backgroundColor': 'red' }}>{demo || "chintan"}</h1>
                {/* In and opearator if any value is there then it prints the variable value */}
                <h1 style={{ 'backgroundColor': 'yellow' }}>{"chintan" && demo}</h1>
            </div>
        </>
    )
}

export default ShortCircuitEval