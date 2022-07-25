import React from 'react';
import './ProductPriceFilter.css';

class ProductPriceFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){
        return(
            <div className='productPriceFilter'>
                <p>From:</p>
                <input type="number"
                       className='productPrice priceFrom'
                       />
                <p>To:</p>
                <input type="number"
                       className='productPrice priceTo'
                       />    
                <button className='btn-price'>Go</button>          
            </div>
        );
    }

}

export default ProductPriceFilter;