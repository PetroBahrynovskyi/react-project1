import React from "react";
import '../styles/general.css';
import ProductItem from "./ProductItem";


class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showAll : false,
        }
    }

    showAllProducts = () => {
        this.setState({showAll: !this.state.showAll});
    }

    render(){

        return(
           <> 
            <div className="wrapper-general"> 
                <button className="title-all-products" onClick={this.showAllProducts}>All Products</button>
            </div>           
                <div className='products-wrapper'>
                {this.state.showAll && this.props.list.map((item) =>{
                        return <ProductItem key={'key__' + item.title + '' + item.salePrice + ''} name={item.title} salePrice={item.price} image={item.image} listItem={item}/>
                    })
                    }
                </div>
            </>   
        );
    }
}

export default ProductList;