import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import './Products.css'

class Products extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        }
    }

 
  


    render(){
        console.log(this.props);
        return(
            <div className='products'>
                {this.props.getAllProducts && <span>Showed</span>}
            </div>
        );
    }
}
export default Products;