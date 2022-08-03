import React from 'react';
import './ProductItemDetails.css';
import DisplayItems from '../DisplayItemsPage/DisplayItemsPage';
import {Routes, Route, Link } from 'react-router-dom';
const ProductItemDetails = ({detailedProductToshow}) => {
    const product = detailedProductToshow;
    return (
        <>
        {detailedProductToshow && 
        <div className='detail-product'>
           
            <div className='detail-product__inf'>
                <div className='detail-product__image'>
                  <img src={product.image}/>
                </div>
                <div className='detail-product__details'>
                    <p className='detail-product__details-title'>{product.title}</p>
                    <p className='detail-product__details-price'>{product.price}</p>
                    <p className='detail-product__details-category'>{product.category}</p>
                    <p className='detail-product__details-rating'>{product.rating.rate}</p>
                </div>      
            </div>       
            <div className='detail-product__description'>

            </div>       
        </div>
        }
    
        </>
    );
}
export default ProductItemDetails;

