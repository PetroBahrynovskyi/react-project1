import ProductItem from "../ProductItem/ProductItem";
import './SearchResultList.css'
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
                <span>List of found products in search:</span>
                <span className='list-of-found'>
                    { this.props.detailProduct.map((item) => {
                        return  <ProductItem key={'key__' + item.title + '' + item.salePrice + ''} name={item.title} salePrice={item.price} image={item.image}/>
                    })}
                </span>
            </>
            );
        }
} 

export default SearchResultList;