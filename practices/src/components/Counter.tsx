import React, { useState } from 'react'

const Counter : React.FC = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <div>Counter</div>
            <label>Count :  {count}</label>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button onClick={() => setCount(prev => prev + 1)}> + </button>
                <button onClick={() => setCount(prev => prev - 1)}> - </button>
            </div>
            <div style={{ display: 'flex', justifyContent: "center", padding:10}}>
                <button onClick={()=>setCount(0)}> Reset </button>
            </div>
        </>
    )
}

export default Counter