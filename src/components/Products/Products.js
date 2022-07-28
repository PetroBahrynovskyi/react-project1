import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './Products.css'

const Products = (props) => {

    const displayProducts = (arr) => {
        return arr.map((item,i) => {
            return <ProductItem key={i} name={item.title} salePrice={item.price} image={item.image} />
        });
    }

    return(
            <div className='products'>
                {displayProducts(props.productsToDisplay)}
            </div>
        );
}
export default Products;

