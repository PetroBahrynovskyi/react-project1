import React from "react";
import ProductItem from "../ProductItem/ProductItem";
import './ProductCategoriesFilter.css';


class ProductCategoriesFilter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categoryToShow : "",
        }
    }

    sortProducts = (category) => {
        this.setState({categoryToShow : category});
    }
    
    filterProducts = (arr) => {
        console.log(`works`);  
        return this.showAllProducts(arr.filter((elem) => elem.category == this.state.categoryToShow))
    }

    

    render(){
        return(
            <div className="productCategories">
                <div className="category-buttons">
                    <button className="category-btn" onClick={() => {this.props.getAllProducts(true)}}>All</button>
                    {Array.from(new Set(this.props.productItems.map((item) => item.category))).map((item, i) => {
                        return <button key={i} className="category-btn" onClick={() => {this.sortProducts(item)}}>{`${item}`}</button>
                    })}
                </div>
                <div className="show-items-category">
                    {this.props.productItems.filter((elem) => elem.category == this.state.categoryToShow).map((item) => {
                            return <ProductItem key={'key__' + item.title + '' + item.salePrice + ''} name={item.title} salePrice={item.price} image={item.image} description={this.state.categoryToShow}/>
                    })}

                </div>
            </div>
        );
    }
} 

export default ProductCategoriesFilter;


/*
    

*/