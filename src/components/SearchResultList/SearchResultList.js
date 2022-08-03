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
                { /*TODO add swithcer widget that would swicth view from table to list and vice versa*/}
        <Outlet/>
            {props.productsToDisplay.map((item,i) => {
             return (
                 <>
                     {/* TODO:
                      * use only this simple code and do not pass object values via router, if your object were bigger the code would have become unreadable
                      * <Link to={`/products/${item.id}`}>
                        and remove the following 
                      *
                     */}
                 <Link to="../ProductItemDetails/ProductItemDetails" key={i}> 
                    <ProductItem key={i} name={item.title} salePrice={item.price} image={item.image} onShowDetailsProduct={() => props.onShowDetailsProduct(item.title)}/>
                </Link>
                <Routes>
                
                    <Route path="../ProductItemDetails/ProductItemDetails" element={<ProductItemDetails />}/>
                </Routes>
                </> 
                 
             );
             
         })}
         
        </div>
     
    
        </>
    );
      
}

export default SearchResultList;