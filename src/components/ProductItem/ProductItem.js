import React, {useState,useEffect} from 'react';
import './ProductItem.css';
import itemImg from '../../images/item-img.webp';

const ProductItem = ({name = 'name', salePrice = 'salePrice', image = itemImg, description='', listItem=''}) => {
    const [isFocused, setIsFocused] = useState(false);
 

    useEffect(() => {
        
    },[description])
    
    
    const showDesc = () => setIsFocused(!isFocused);

    return (
        <div
        onMouseEnter={showDesc} 
        className={`${isFocused ? `productInf description show` : `productInf description`}`}>
            <img src={image}/>
            <div>
                <p className='productName'>{name}</p>
                <p className='productPrice'>Price:{salePrice}$</p>
            </div>
            <span className='desription'>
            {listItem.description}
            </span>
        </div>
    );
}

export default ProductItem;
