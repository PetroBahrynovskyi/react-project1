import React, {useState,useEffect} from 'react';
import './ProductItem.css';
import itemImg from '../../images/item-img.webp';

const ProductItem = ({name = 'name', salePrice = 'salePrice', image = itemImg, description='', listItem='', onShowDetailsProduct}) => {
    const [isFocused, setIsFocused] = useState(false);


    return (
        <button
        onClick={onShowDetailsProduct}
        className={`${isFocused ? `productInf description show` : `productInf description`}`}>
            <img src={image}/>
            <div>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price:{salePrice}$</p>
            </div>
            <span className='desription'>
            {listItem.description}
            </span>
        </button>
    );
}

export default ProductItem;
