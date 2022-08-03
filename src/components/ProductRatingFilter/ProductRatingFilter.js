import React from 'react';
import './ProductRatingFilter.css';

const ProductRatingFilter = (props) => {
    
    const selectOptions = ['All', ...props.ratingList];

    return(
        <div className='productRatingFilter'>
            <span className='productRatingFilter-items'>
                <p>Choose the rating: </p>
                <select className='productRating-select' onChange={(e) => props.onRatingChange(e.target.value)}>
                    {selectOptions.map((item,i) => {
                        return <option key={i} value={item}>{item}</option>
                    })
                }
            </select>
            </span>      
        </div>
    );
}

export default ProductRatingFilter;