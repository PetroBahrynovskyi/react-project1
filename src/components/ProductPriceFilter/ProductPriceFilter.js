import React from 'react';
import './ProductPriceFilter.css';

const ProductPriceFilter = (props) =>  {
    return(
            <div className='productPriceFilter'>
                <p>From:</p>
                <input type="number"
                       className='productPrice priceFrom'
                        onChange={(e) => props.onGetPriceMin(e.target.value)}
                       />
                <p>To:</p>
                <input type="number"
                       className='productPrice priceTo'
                       onChange={(e) => props.onGetPriceMax(e.target.value)}
                       />    
                <button className='btn-price' onClick={() => props.onFilterByPrice(props.productsToDisplay)}>Go</button>          
            </div>
        );

}

export default ProductPriceFilter;