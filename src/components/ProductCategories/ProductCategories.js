import ProductItem from "../ProductItem/ProductItem";
import './ProductCategories.css';
import React from "react";


class ProductCategories extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            buttons : [],
            categoryToShow : "",
            
        }
    }

    sortProducts = (category) => {
        this.setState({categoryToShow : category});
    }



    render(){
        return(
            <>
                <div className="category-buttons">
                    
                    {Array.from(new Set(this.props.buttons.map((item) => item.category))).map((item, i) => {
                         return <button key={i} className="category-btn" onClick={() => {this.sortProducts(item)}}>{`${item}`}</button>
                    })}
                </div>
                <div className="show-items-category">
                {this.props.buttons.filter((elem) => elem.category == this.state.categoryToShow).map((item) => {
                        return <ProductItem key={'key__' + item.title + '' + item.salePrice + ''} name={item.title} salePrice={item.price} image={item.image} description={this.state.categoryToShow}/>
                })}
                </div>
            </>
        );
    }
} 

export default ProductCategories;