import React from "react";
import ProductItem from '../ProductItem/ProductItem'
import { Routes, Route, Link, Outlet } from "react-router-dom";
import ProductItemDetails from "../ProductItemDetails/ProductItemDetails";

import './SearchResultList.css'
import DisplayItems from "../DisplayItemsPage/DisplayItemsPage";
const SearchResultList = (props) => {
    return (
       <>
       <div className="search-result">
        <Outlet/>
        <Link to="/">Back</Link>
            {props.productsToDisplay.map((item,i) => {
             return (
                <>
                 <Link to="../ProductItemDetails/ProductItemDetails" key={i}> 
                    <ProductItem key={i} name={item.title} salePrice={item.price} image={item.image} onShowDetailsProduct={() => props.onShowDetailsProduct(item.title)}/>
                </Link>
                </> 
                
             );
             
         })}
        <Routes>
            <Route path="/"  element={<DisplayItems/>}/>
            <Route path="../ProductItemDetails/ProductItemDetails" element={<ProductItemDetails />}/>
        </Routes>
        </div>
     
        
        </>
    );
      
}

export default SearchResultList;