import React from 'react'

const ProductCart = ({listOfProduct}) => {
  return (
    <>
        <div>ProductCart</div>

        <ul>
            {listOfProduct && listOfProduct.map((product) => {
                return (
                    <div>

                        <li key={product["id"]} >
                        {console.log(product["id"])}
                        {product["id"] } <br/>
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

export default ProductCart