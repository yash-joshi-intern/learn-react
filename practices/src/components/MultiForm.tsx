import  { useState } from 'react'

interface FormState {
    email : string
    name : string
    age : number
}

const MultiForm = () => {

    const [form, setForm] = useState<FormState>({email : '' , name : '', age : 0})

    const handleSubmit = (e : any) : void => {
        e.preventDefault()
        console.log(form)
    }

    const handleChange = (e : any) : void => {
        const {name, value} = e.target
        e.preventDefault();
        setForm((prev) => ({...prev ,[name] : value}))
    }

  return (
    <>
        <div>MultiForm</div>
        <form onSubmit={handleSubmit}>
            <label> Email : </label>  
            <input name='email' value={form.email} onChange={handleChange} placeholder={form.email}></input>

            <label> Name : </label>  
            <input name = "name" value={form.name} onChange={handleChange} placeholder={form.name}></input>

            <label> Age : </label>  
            <input name = "age" value={form.age} onChange={handleChange}></input>  

            <button type='submit'> Submit </button>
        </form>            
    </>
  )
}

export default MultiForm