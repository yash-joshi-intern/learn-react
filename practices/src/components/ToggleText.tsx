import React, { useState } from 'react'

const ToggleText = () => {

    const [checks, setChecks] = useState<boolean>(false)

  return (
    <>
        <div>ToggleText</div>
        <label>
            <input type='checkbox' checked={checks} onChange={(e)=>setChecks(e.target.checked)}></input>
            I accept the Terms
        </label>
         <p>{checks ? 'Accepted ✓' : 'Not accepted'}</p>
    </>
  )
}

export default ToggleText