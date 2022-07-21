import React, {useState,useEffect} from 'react';
import '../styles/general.css';
import itemImg from '../images/item-img.webp';
const ProductItem = ({name = 'name', salePrice = 'salePrice', image = itemImg, description=''}) => {
    const [isFocused, setIsFocused] = useState(false);
    

    useEffect(() => {
        
    },[description])
    
    
    const showDesc = () => setIsFocused(!isFocused)
    return (
        <div
        onMouseOver={showDesc} 
        className={`productInf`}>
            <img src={image}/>
            <div>
                <p className='productName'>{name}</p>
                <p className='productPrice'>Price:{salePrice}$</p>
            </div>
            <span className='desription'>
                {description} 
            </span>
        </div>
    );
}

export default ProductItem;