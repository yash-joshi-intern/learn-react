import React, { useState } from 'react'

const Controller: React.FC = () => {

    const [value, setValue] = useState<string>("");

    return (
        <>
            <div>Controller</div>
            <div>
                <p> Live Value : {value}</p>
                <input type='text'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
                    placeholder='enter something'>
                </input>
            </div>
        </>
    )
}

export default Controller