import React from 'react';
import './ProductPriceFilter.css';

const ProductPriceFilter = (props) =>  {
    return(
            <div className='productPriceFilter'>
                <p>From:</p>
                <input type="number"
                       className='productPrice priceFrom'
                       value={props.minPrice}
                       onChange={(e) => props.onMinPriceChange(e.target.value)}
                       />
                <p>To:</p>
                <input type="number"
                       className='productPrice priceTo'
                       value={props.maxPrice}
                       onChange={(e) => props.onMaxPriceChange(e.target.value)}
                       />    
                <button className='btn-price' onClick={() => props.onFilterByPrice()}>Go</button>          
            </div>
        );

}

export default ProductPriceFilter;