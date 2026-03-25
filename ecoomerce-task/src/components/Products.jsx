import React, { useEffect, useState } from 'react'
import ProductCart from './ProductCart';
import FilterByName from './FilterByName';
import Sort from './Sort';
import Pagination from './Pagination';

const Products = () => {

    const [listOfProduct, setListOfProduct] = useState([]);

    async function fetchData() {
        const response = await fetch("https://dummyjson.com/products")

        if(!response.ok){
            throw new Error("Error while fetching")
        }
        const json = await response.json()

        // console.log(json)

        setListOfProduct(json.products)
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
    <div>Products</div>
    <ProductCart listOfProduct={listOfProduct}/>

    <FilterByName/>

    <Pagination/>

    <Sort/>

    </>
  )
}

export default Products