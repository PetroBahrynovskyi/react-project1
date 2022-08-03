import React from "react";
import './ProductCategoriesFilter.css';


const  ProductCategoriesFilter = (props) =>  {
    
        return(
            <div className="productCategories">
                <div className="category-buttons">
                    <button className="category-btn" onClick={() => props.onShowAllProducts()}>All</button>
                    {  props.categoryList.map((item, i) => {
                        return <button 
                                key={i} 
                                className="category-btn"
                                onClick={() => {props.onCategoryChange(item)}}>
                                {`${item}`}
                            </button> 
                    })
                    }
                </div>
            </div>
        );
} 

export default ProductCategoriesFilter;


/*
    

*/