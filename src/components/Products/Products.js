import React from 'react';
import './Products.css'

class Products extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        
        }
    }

 
  


    render(){
        return(
            <div className='products'>
                {this.props.displayAllProducts && this.props.onDisplayAllProducts(this.props.productItems)}
            </div>
        );
    }
}
export default Products;