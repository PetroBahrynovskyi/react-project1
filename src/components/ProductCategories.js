import ProductItem from "./ProductItem";
import '../styles/general.css';
import React from "react";


class ProductCategories extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttons : [],
        }
    }

    sortProducts = (category) => {
         return       
    }

    render(){
        return(
            <>
                <div className="category-buttons">
                    {Array.from(new Set(this.props.buttons.map((item) => item.category))).map((item, i) => {
                         return <button key={i} className="category-btn" onClick={this.sortProducts(item)}>{`${item}`}</button>
                    })}
                </div>
            </>
        );
    }
} 

export default ProductCategories;