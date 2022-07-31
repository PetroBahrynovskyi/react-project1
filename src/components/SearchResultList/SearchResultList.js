import React from "react";
import ProductItem from '../ProductItem/ProductItem'

import './SearchResultList.css'
const SearchResultList = (props) => {
    return (
        <div className="search-result">
            {props.productsToDisplay.map((item,i) => {
             return <ProductItem key={i} name={item.title} salePrice={item.price} image={item.image} />
         })}
        </div>
    );
}

export default SearchResultList;