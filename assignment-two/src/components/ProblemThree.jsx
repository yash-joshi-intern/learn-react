import React, { useEffect, useState } from 'react'

const ProblemThree = () => {

    const [userId , setUserId] = useState(0);
    const [user, setUser] = useState(null);

    useEffect(() => {

        let isActive = true 

        fetchUser(isActive);

        return() => {
            console.log("return of the three")
            isActive = false
        }
    }, [userId])

    const fetchUser = async(isActive) => {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/" + userId);
        
        const data = await res.json();

        if(isActive) {
            setUser(data)
        }
    }

  return (
    <div>
        <h3>ProblemThree</h3>

        <div>
            User List After Click <br></br>
            <button onClick={()=>{
                setUserId((prev) => prev + 1)
            }}> Next </button>
            
        </div>
        {user && (
            <div>
                <p> ID : {user.id} </p>
                <p> Name : {user.name} </p>
                <p> Email : {user.email} </p>
            </div>
        )}

        {console.log(user)}
    </div>
  )
}

export default ProblemThree