import React, { useEffect, useState } from 'react';
import './ProductItemDetails.css';
import DisplayItems from '../DisplayItemsPage/DisplayItemsPage';
import { Routes, Route, Link, useParams } from 'react-router-dom';

const ProductItemDetails = () => {
    const [product, setProduct ] = useState()
    const { productId } = useParams();

    useEffect(() => {
        //TODO
        //use product id for fetching product detauls
        
        //fetch(https://fakestoreapi.com/products/ + prodcutId)......
        
    });
    return (
        <>
      
            <div>value of :produtId is {productId}</div>
            
    
        </>
    );
}
export default ProductItemDetails;

