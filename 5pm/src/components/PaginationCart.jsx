import React from 'react'

const PaginationCart = ({listOfFilterProduct}) => {
  return (
    <>
        <div>Pagination Cart </div>

        <ul>
            {listOfFilterProduct && listOfFilterProduct.map((product) => {
                return (
                    <div>

                        <li key={product["id"]} >
                        {console.log(product["id"])}
                        {product["id"] } <div></div>
                        {product["title"]} <div></div>
                        {product["description"]} <div></div>
                        {product["category"]} <div></div>
                        {product["price"]} <div></div>
                    
                    </li>

                    </div>
                )
            })}
        </ul>
    </>
  )
}

export default PaginationCart