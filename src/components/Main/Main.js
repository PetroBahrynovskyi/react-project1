import React from 'react';


import Sidebar from '../Sidebar/Sidebar';
import Products from '../Products/Products';
import './Main.css'

class Main extends React.Component {
    constructor(props){
        super(props);
    }


    render(){
        console.log(`Main`);
        console.log(this.props);
        return(
            <section className='main'>
                <Sidebar 
                productItems={this.props.productItems}
                getAllProducts={this.props.getAllProducts()}
                />
                <Products 
                getAllProducts={this.props.getAllProducts}
                />
            </section>
        );
    }
}
export default Main;