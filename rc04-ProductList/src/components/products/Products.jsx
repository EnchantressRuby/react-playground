import React from 'react'
import ProductCard from "./ProductCard";
import "./Products.scss"

const Products = ({ products }) => {

    return (
        <div className='product-list'>
            {
                products.map((prod) => (
                    <ProductCard key={prod.id} {...prod} />
                ))
            }

        </div>
    )
}
//  {
//    /* <ProductCard key={prod.id} urun={prod}/> */
//  }
export default Products