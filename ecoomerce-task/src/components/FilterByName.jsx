import React, { useState , useEffect} from 'react'
import { useScan } from 'react-scan';
import FilterItemsCart from './FilterItemsCart';

const FilterByName = () => {
  const [listOfFilterProduct, setListOfFilterProduct] = useState([]);
  const [category, setCategory] = useState("")
  
      async function fetchData() {
          const response = await fetch(`https://dummyjson.com/products/category/${category}`)
  
          if(!response.ok){
              throw new Error("Error while fetching by category")
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
            <div>Enter the category name</div>
            
            <input onChange={(e)=> {
                setCategory((category) => e.target.value)
            }} value={category}></input>

            <button onClick={(e) => {
                fetchData()
            }}> Click to search by filter</button>

            <FilterItemsCart listOfFilterProduct= {listOfFilterProduct}/>
        </>
    )
}

export default FilterByName