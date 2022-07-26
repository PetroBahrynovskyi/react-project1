import React from 'react';
import './ProductRatingFilter.css'

class ProductRatingFilter extends React.Component {
    constructor(props){
        super(props);
        this.state= {

        }
    }
    render(){
        return(
            <div className='productRatingFilter'>
                <span className='productRatingFilter-items'>
                    <p>Choose the rating: </p>
                <select className='productRating-select'>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                </select>
                </span>      
            </div>
        );
    }

}

export default ProductRatingFilter;