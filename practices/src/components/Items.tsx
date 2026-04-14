import React from 'react'

const items : string[]= ["banana" , "keri", "chiku", "dadam" ]

const Items : React.FC = () => {

  return (
    <div style={{display:'flex' , justifyContent:'center'}}>
        <ul>
            {items.map((each, index) => 
                <li key={index} style={{listStyle:'none'}} >
                    {each} : Khayega ? 
                </li>
            )}
        </ul>
    </div>
  )
}

export default Items