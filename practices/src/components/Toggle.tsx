import React, { useState } from 'react'

const Toggle: React.FC = () => {

    const [state, setState] = useState<boolean>(false)

    return (
        <div>
            <div>Toggle</div>
            <span>  State : {state}</span>
            <button onClick={() => setState(state => !state)}> Click </button>
            {(state === true) && <p> Hello Bro</p>}
        </div>

    )
}

export default Toggle