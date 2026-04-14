import React from 'react'

interface UserCardProps {
  name: string;
  age: number;
  email: string;
}

const Child : React.FC<UserCardProps> = ({name, email , age}) => {
    return (
        <>
            <label> {name}</label>
            <label> {email}</label>
            <label> {age}</label>
        </>
    )
}

const Props : React.FC = () => {
  return (
    <Child name = "yash"  email = "yash@gmail.com" age = {20}/>
  )
}

export default Props