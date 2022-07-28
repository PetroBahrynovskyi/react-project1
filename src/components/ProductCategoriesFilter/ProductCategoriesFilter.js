import React from "react";
import './ProductCategoriesFilter.css';


const  ProductCategoriesFilter = (props) =>  {
    

    const displayFilterButtons  = (arr) =>  {
         return Array.from(new Set(arr.map((item) => item.category))).map((item, i) => {
             return <button 
                        key={i} 
                        className="category-btn" 
                        onClick={() => {props.onGetCategoryButtons(item); props.onFilterByCategories(props.productItems)}}>
                         {`${item}`}
                    </button>
         })
     }

        return(
            <div className="productCategories">
                <div className="category-buttons">
                    <button className="category-btn" onClick={props.onShowAllProducts}>All</button>
                    {displayFilterButtons(props.productItems)}
                </div>
                <div className="show-items-category">
                

                </div>
            </div>
        );
} 

export default ProductCategoriesFilter;


/*
    

*/