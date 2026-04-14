import React, { useState, useEffect } from 'react'
import SortCart from './SortCart';

const Sort = () => {
  const [listOfFilterProduct, setListOfFilterProduct] = useState([]);
  const [order, setOrder] = useState("desc")
  const [price, setPrice] = useState(0)

      async function fetchData() {
          const response = await fetch(`https://dummyjson.com/products?sortBy=${price}&order=${order}`)
  
          if(!response.ok){
              throw new Error("Error while fetching by category for oder")
          }
          const json = await response.json()
  
        //   console.log(json)
  
          setListOfFilterProduct(json.products)
      }
  
      useEffect(()=>{
          try{
              fetchData()
          }catch(error){
              console.log(error)
          }
      },[])

      return (
        <>
            <div>Pagination</div>
            
            <input onChange={(e)=> {
                setOrder(e.target.value)
            }} value={order}></input>

            <input onChange={(e)=> {
                setPrice(Number(e.target.value))
            }} value={price}></input>

            <button onClick={(e) => {
                fetchData()
            }}> Click to search by order by desc and price</button>

           {/* <PaginationCart listOfFilterProduct = {listOfFilterProduct}/> */}

           <SortCart listOfFilterProduct = {listOfFilterProduct}/>
        </>
    )
}

export default Sort