import React from 'react';
import './ProductRatingFilter.css'

const ProductRatingFilter = (props) => {
        
        const displayOptions = (arr) => {
            const ratingOrder = Array.from(new Set(arr.map(item => item.rating.rate < 3 ? Math.trunc(item.rating.rate) : Math.ceil(item.rating.rate)))).sort();
            return ratingOrder.map((item,i) => {
                return <option key={i} value={item} >{item}</option>
            })
        }

        return(
            <div className='productRatingFilter'>
                <span className='productRatingFilter-items'>
                    <p>Choose the rating: </p>
                <select className='productRating-select'  onChange={(e) => {props.onGetRating(e.target.value); props.onFilterByRating(props.productsToDisplay)}}>
                       {displayOptions(props.productItems)}
                 
                </select>
                </span>      
            </div>
        );
}

export default ProductRatingFilter;