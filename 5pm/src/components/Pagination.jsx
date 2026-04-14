import React, { useState, useEffect } from 'react'
import PaginationCart from './PaginationCart';

const Pagination = () => {

    const [listOfFilterProduct, setListOfFilterProduct] = useState([]);
  const [limit, setLimit] = useState(0)
  const [skip, setSkip] = useState(0)
  

      async function fetchData() {
          const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
  
          if(!response.ok){
              throw new Error("Error while fetching by category")
          }
          const json = await response.json()
  
          console.log(json)
  
          setListOfFilterProduct(json.products)
      }
  
      useEffect(()=>{
          try{
              fetchData()
          }catch(error){
              console.log(error)
          }
      },[limit, skip])

      return (
        <>
            <div>Pagination</div>
            
            <input onChange={(e)=> {
                setLimit((limit) => Number(e.target.value))
            }} value={limit}></input>

            <input onChange={(e)=> {
                setSkip((skip) => Number(e.target.value))
            }} value={skip}></input>

            <button onClick={(e) => {
                fetchData()
            }}> Click to search by Pagincaito</button>


           <button onClick={(e) => {
            if(limit<= 30 && skip<=164) {
                setSkip((skip) => skip + 10)
            setLimit((limit) => limit)
            }
           }} disabled = {(skip==0) ? false : true}>
            Next
           </button>
           <button onClick={(e)=> {


            if(limit<= 30 && skip<=164) {
                setSkip((skip) => skip - 10)
            setLimit((limit) => limit)
            }
           }} disabled = {(skip>=164) ? false : true}> Previous </button>

           <PaginationCart listOfFilterProduct = {listOfFilterProduct}/>
        </>
    )
}

export default Pagination