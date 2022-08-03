import React from 'react';
import './ProductRatingFilter.css';

const ProductRatingFilter = (props) => {

        return(
            <div className='productRatingFilter'>
                <span className='productRatingFilter-items'>
                    <p>Choose the rating: </p>
                <select className='productRating-select'  onChange={(e) => props.onRatingChanged(e.target.value)}>
                       {props.ratingList.map((item,i) => {
                            return <option key={i} value={item}>{item}</option>
                        })
                       }
                 
                </select>
                </span>      
            </div>
        );
}

export default ProductRatingFilter;