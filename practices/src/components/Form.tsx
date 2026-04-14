import React, { useState } from 'react'

const Form: React.FC = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (e : any) : void => {
        e.preventDefault();
        console.log({"email" : email,"password" :password})
    }

    return (
        <>
            <div>Form</div>

            <form onSubmit={handleSubmit}>

                <label> Email : </label>
                <input onChange={(e) => setEmail(e.target.value)} type='text' placeholder='email' value={email}/>

                <label> Password : </label>
                <input onChange={(e) => setPassword(e.target.value)} type='text' placeholder='password' value={password}/>

                <button type='submit'> Sumit Plez </button>
            </form>
        </>
    )
}

export default Form