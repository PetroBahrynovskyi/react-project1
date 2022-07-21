import React from "react";
import itemImg from '../images/item-img.webp'; 
import '../styles/general.css';
import ProductItem from "./ProductItem";


class ProductList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
     
        }
    }

    render(){

        return(
            <>
                <button className="title-all-products">All Products</button>           
                <div className='products-wrapper'>
                    {this.props.list.map((item) =>{
                        return <ProductItem key={'key__' + item.title + '' + item.salePrice + ''} name={item.title} salePrice={item.price} image={item.image} />
                    })
                    }
                </div>  
            </>
        );
    }
}

export default ProductList;