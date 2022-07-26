import React from 'react';


import Sidebar from '../Sidebar/Sidebar';
import Products from '../Products/Products';
import './Main.css'

class Main extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        return(
            <section className='main'>
                <Sidebar 
                productItems={this.props.productItems}
                getAllProducts={() => this.props.getAllProducts(true)}
                />
                <Products
                productItems={this.props.productItems} 
                displayAllProducts={this.props.displayAllProducts}
                onDisplayAllProducts={() => this.props.onDisplayAllProducts(this.props.productItems)}
                />
            </section>
        );
    }
}
export default Main;