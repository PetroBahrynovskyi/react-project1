import ProductItem from "./ProductItem";
import '../styles/general.css';
import React from "react";

class SearchResultList extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        
        return (
            <>  
                
                <span className='list-of-found'>
                    {this.props.detailProduct.length > 0 ?  this.props.detailProduct.map((item) => {
                        return  <ProductItem key={'key__' + item.title + '' + item.salePrice + ''} name={item.title} salePrice={item.price} image={item.image}/>
                    })  : `Products not found `}
                </span>
            </>
            );
        }
} 

export default SearchResultList;